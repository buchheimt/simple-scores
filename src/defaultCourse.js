const holes = [
  {
    yardage: 307,
    par: 4,
    rank: 18,
    num: 1
  },
  {
    yardage: 515, 
    par: 5, 
    rank: 14, 
    num: 2
  },
  {
    yardage: 459, 
    par: 4, 
    rank: 2, 
    num: 3
  },
  {
    yardage: 428, 
    par: 4, 
    rank: 3, 
    num: 4
  },
  {
    yardage: 165, 
    par: 3, 
    rank: 15,
    num: 5
  },
  {
    yardage: 362, 
    par: 4, 
    rank: 5, 
    num: 6
  },
  {
    yardage: 160, 
    par: 3, 
    rank: 7, 
    num: 7
  },
  {
    yardage: 371, 
    par: 4, 
    rank: 9, 
    num: 8
  },
  {
    yardage: 380, 
    par: 4, 
    rank: 6, 
    num: 9
  },
  {
    yardage: 328, 
    par: 4, 
    rank: 17,
    num: 10},
  {
    yardage: 477, 
    par: 4, 
    rank: 1, 
    num: 11
  },
  {
    yardage: 185, 
    par: 3, 
    rank: 8, 
    num: 12
  },
  {
    yardage: 553, 
    par: 5, 
    rank: 10,
    num: 13
  },
  {
    yardage: 410, 
    par: 4, 
    rank: 12,
    num: 14
  },
  {
    yardage: 406, 
    par: 4, 
    rank: 4, 
    num: 15
  },
  {
    yardage: 317, 
    par: 4, 
    rank: 13,
    num: 16
  },
  {
    yardage: 165, 
    par: 3, 
    rank: 16,
    num: 17
  },
  {
    yardage: 342, 
    par: 4, 
    rank: 11,
    num: 18
  }
];

holes.forEach(hole => {
  hole.player1 = null
  hole.player2 = null
  hole.player3 = null
  hole.player4 = null
  hole.notes = ""
  return hole;
});

export default { holes, courseName: "Green Crest GC" };