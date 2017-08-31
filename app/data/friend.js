// ===============================================================================
// DATA
// Below data will hold all of the reserved tables.
// Initially we just set it equal to a "dummy" customer.
// But you could have it be an empty array as well.
// ===============================================================================

var friendsArray = [
  {
    "name":"dog",
    "photo":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLlCMc6a9_bjynR61o2i3WeiDIOyVlJP-ovIAw0Tlf7so9WQJzTg",
    "scores":[
        5,
        1,
        4,
        4,
        5,
        1,
        2,
        5,
        4,
        1
      ]
  },
  {
    "name":"cat",
    "photo":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHAOQy_d41NsNoNXPxV2QVSXcM-3hJ37_h_d99Qxz7XECaN080",
    "scores":[
        1,
        2,
        3,
        4,
        3,
        2,
        2,
        3,
        1,
        1
      ]
  }
];

// Note how we export the array. This makes it accessible to other files using require.
module.exports = friendsArray;
