const Transaction = require('../models/Transaction');

// @desc    Get all transactions
// @route   GET /api/v1/transactions
// @access  Public
exports.getTransactions = async (req, res, next) => {
    try {
        const transactions = await Transaction.find();
        return res.status(200).json({
            success: true,
            count: transactions.length,
            data: transactions
        });
    } catch (err) {
        return res.status(500).json({
            success: false,
            error: 'Server Error'
        });
    }
}

// @desc    Add transactions
// @route   POST /api/v1/transactions
// @access  Public
exports.addTransaction = async (req, res, next) => {
    try {
        // const { text, amount } = req.body;
        const newTransaction = await Transaction.create(req.body);

        return res.status(201).json({
            success: true,
            data: newTransaction
        });
    } catch (err) {
        if (err.name === 'ValidationError') {
            console.log(err.errors);
            const messages = Object.values(err.errors).map(val => val.message);

            return res.status(400).json({
                success: false,
                error: messages
            });
        } else {
            return res.status(500).json({
                success: false,
                error: 'Server Error'
            });
        }
    }
}

// @desc    Delete transactions
// @route   DELETE /api/v1/transactions/:id
// @access  Public
exports.deleteTransaction = async (req, res, next) => {
    try {
        const transaction = await Transaction.findByIdAndDelete(req.params.id);

        if (!transaction) {
            return res.status(404).json({
                success: false,
                error: 'No transaction found'
            });
        }
        return res.status(200).json({
            success: true,
            data: transaction
        })
    } catch (err) {
        return res.status(500).json({
            success: false,
            error: 'Server Error'
        })
    }
}