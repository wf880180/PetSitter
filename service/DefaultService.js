'use strict';


/**
 * Delete Job
 *
 * id Integer 
 * no response value expected for this operation
 **/
exports.deleteJobWithId = function(id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Modify Job Application
 *
 * body JobApplication Update the application details (optional)
 * id Integer 
 * returns JobApplication
 **/
exports.modifyJobApplicationWithId = function(body,id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "user_id" : 6,
  "job_id" : 1,
  "id" : 0,
  "status" : "status"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * List All Jobs
 *
 * returns List
 **/
exports.listAllJobs = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "creator_user_id" : 6,
  "start_time" : "start_time",
  "activity" : "activity",
  "end_time" : "end_time",
  "id" : 0,
  "dog" : {
    "size" : "size",
    "name" : "name",
    "age" : 1,
    "breed" : "breed"
  }
}, {
  "creator_user_id" : 6,
  "start_time" : "start_time",
  "activity" : "activity",
  "end_time" : "end_time",
  "id" : 0,
  "dog" : {
    "size" : "size",
    "name" : "name",
    "age" : 1,
    "breed" : "breed"
  }
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * View Job
 *
 * id Integer 
 * returns Job
 **/
exports.viewJobWithId = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "creator_user_id" : 6,
  "start_time" : "start_time",
  "activity" : "activity",
  "end_time" : "end_time",
  "id" : 0,
  "dog" : {
    "size" : "size",
    "name" : "name",
    "age" : 1,
    "breed" : "breed"
  }
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * List Applications For Job
 *
 * id Integer 
 * returns inline_response_200_1
 **/
exports.viewApplicationsForJob = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "items" : [ {
    "user_id" : 6,
    "job_id" : 1,
    "id" : 0,
    "status" : "status"
  }, {
    "user_id" : 6,
    "job_id" : 1,
    "id" : 0,
    "status" : "status"
  } ]
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Create JobApplication
 *
 * body JobApplication  (optional)
 * id Integer 
 * no response value expected for this operation
 **/
exports.createJobApplication = function(body,id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Modify Job
 *
 * body Job  (optional)
 * id Integer 
 * returns Job
 **/
exports.modifyJobWithId = function(body,id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "creator_user_id" : 6,
  "start_time" : "start_time",
  "activity" : "activity",
  "end_time" : "end_time",
  "id" : 0,
  "dog" : {
    "size" : "size",
    "name" : "name",
    "age" : 1,
    "breed" : "breed"
  }
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Create Job
 *
 * body Job  (optional)
 * no response value expected for this operation
 **/
exports.createJob = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Delete User
 *
 * id Integer 
 * no response value expected for this operation
 **/
exports.deleteUserWithId = function(id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * View User
 *
 * id Integer 
 * returns User
 **/
exports.viewUserWithId = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "password" : "password",
  "full_name" : "full_name",
  "roles" : [ "roles", "roles" ],
  "id" : 0,
  "email" : "email"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * List Jobs For User
 *
 * id Integer 
 * returns inline_response_200
 **/
exports.listJobsForUser = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "items" : [ {
    "creator_user_id" : 6,
    "start_time" : "start_time",
    "activity" : "activity",
    "end_time" : "end_time",
    "id" : 0,
    "dog" : {
      "size" : "size",
      "name" : "name",
      "age" : 1,
      "breed" : "breed"
    }
  }, {
    "creator_user_id" : 6,
    "start_time" : "start_time",
    "activity" : "activity",
    "end_time" : "end_time",
    "id" : 0,
    "dog" : {
      "size" : "size",
      "name" : "name",
      "age" : 1,
      "breed" : "breed"
    }
  } ]
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Modify User
 *
 * body User  (optional)
 * id Integer 
 * returns User
 **/
exports.modifyUserWithId = function(body,id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "password" : "password",
  "full_name" : "full_name",
  "roles" : [ "roles", "roles" ],
  "id" : 0,
  "email" : "email"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Register User
 *
 * body User  (optional)
 * no response value expected for this operation
 **/
exports.registerUser = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

