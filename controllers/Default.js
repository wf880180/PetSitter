'use strict';

var utils = require('../utils/writer.js');
var Default = require('../service/DefaultService');

module.exports.deleteJobWithId = function deleteJobWithId (req, res, next, id) {
  Default.deleteJobWithId(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.modifyJobApplicationWithId = function modifyJobApplicationWithId (req, res, next, body, id) {
  Default.modifyJobApplicationWithId(body, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.listAllJobs = function listAllJobs (req, res, next) {
  Default.listAllJobs()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.viewJobWithId = function viewJobWithId (req, res, next, id) {
  Default.viewJobWithId(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.viewApplicationsForJob = function viewApplicationsForJob (req, res, next, id) {
  Default.viewApplicationsForJob(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.createJobApplication = function createJobApplication (req, res, next, body, id) {
  Default.createJobApplication(body, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.modifyJobWithId = function modifyJobWithId (req, res, next, body, id) {
  Default.modifyJobWithId(body, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.createJob = function createJob (req, res, next, body) {
  Default.createJob(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteUserWithId = function deleteUserWithId (req, res, next, id) {
  Default.deleteUserWithId(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.viewUserWithId = function viewUserWithId (req, res, next, id) {
  Default.viewUserWithId(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.listJobsForUser = function listJobsForUser (req, res, next, id) {
  Default.listJobsForUser(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.modifyUserWithId = function modifyUserWithId (req, res, next, body, id) {
  Default.modifyUserWithId(body, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.registerUser = function registerUser (req, res, next, body) {
  Default.registerUser(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
