// 19. Remove Nth Node From End of List

// Definition for singly-linked list.
//  function ListNode(val) {
//     this.val = val;
//      this.next = null;
//  }
var removeNthFromEnd = function(head, n) {
    let nullHead = new ListNode(null);
    nullHead.next = head;
    
    let n1 = head, n2 = nullHead;
    while (n--) {
        n1 = n1.next;
    }
    while (n1) {
        n1 = n1.next;
        n2 = n2.next;
    }
    n2.next = n2.next.next;
    return nullHead.next;
};

// 139. Word Break
var wordBreak = function(s, wordDict) {
    let arr = [];
    arr[0] = true;
    
    for(let i = 0; i < s.length; i++) {
        if (arr[i]) {
            for (let j = i + 1; j <= s.length; j++) {
                let str = s.substring(i, j);
                if (wordDict.includes(str)) {
                    arr[j] = true;
                }
            }
        }
    }
    return arr[s.length] === true;
};

// 36. Valid Sudoku
var isValidSudoku = function(board) {
    var n = board.length;
    for (let i = 0; i < n; i++) {
        let rowSet = new Set();
        let colSet = new Set();
        for (let j = 0; j < n; j++) {
            if (board[i][j] !== '.') {
                if (rowSet.has(board[i][j])) {
                    return false;
                }
                rowSet.add(board[i][j]);
            }
            if (board[j][i] !== '.') {
                if (colSet.has(board[j][i])) {
                    return false;
                }
                colSet.add(board[j][i]);
            }
        }
    }
        
        for ( let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                let subbox = new Set();
                
                for (let ii = 0; ii < 3; ii++ ) {
                    for (let jj = 0; jj < 3; jj++) {
                        let v = i * 3 + ii;
                        let p = j * 3 + jj;
                        if (board[v][p] !== '.') {
                            if (subbox.has(board[v][p])) {
                                return false;
                            }
                            subbox.add(board[v][p]);
                        }
                    }
                }
                
            }
        }       
        return true;
};

// 349. Intersection of Two Arrays
var intersection = function(nums1, nums2) {
    const set = new Set(nums1);
    let arr = nums2.filter(n => set.has(n));
    return Array.from(new Set(arr))
};

// Some level of API /design experience would be great 
// https://stackoverflow.com/questions/14061381/interview-system-api-design
// Basic ideas:
// 1. Design the Schema, phoneNumber is String, ValueOfNumber is boolean
// 2. Use hashmap to store the data. when a phoneNumber is alloted, we set key is this phoneNumber and value is true. 
//    If someone request whether this number is in our hashmap and value is true.
