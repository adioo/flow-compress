"use strict"

exports.gzip = (scope, inst, args, data, next) => {
    next(null, data);
};
