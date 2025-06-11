/**
 * @module inxt-bridge/server/middleware/public-bucket
 */

'use strict';

module.exports = function PublicBucketFactory(storage){
  const Bucket = storage.models.Bucket;

  /**
   * Checks if the bucket id and operation are public
   * @param {String} req.params.id - Unique bucket id
   * @param {String} req.body.operation - Operation to perform
   */
  return async function publicBucket(req, res, next) {
    var bucketId = req.params.id;
    var operation = req.body.operation || 'PULL';

    try {
      const bucket = await Bucket.findOne({
        _id: req.params.id,
        publicPermissions: { $in: [operation] }
      });
      
      if(!bucket){
        return next(new Error('Bucket not found'));
      }
      next(null);
    } catch(err) {
      return next(err);
    }

  };

};