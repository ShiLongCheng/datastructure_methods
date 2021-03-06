#include <iostream>
#include <vector>
#include <cassert>

using namespace std;

class Solution
{
private:
    const string letterMap[10] = {
        " ", "", "abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz"
    };

    vector<string> res;
    
    void findCombination(const string &digits, int index, const string &s) {
        
        if (index == digits.size()) {
            // 保存s
            res.push_back(s);
            return;
        }
        char c = digits[index];
        assert(c >= '0' && c <= '9' && c != '1');
        string letters = letterMap[c - '0'];
        for (int i = 0; i < letters.size(); i++) {
            findCombination(digits, index + 1, s + letters[i]);
        };
    };
public:
    vector<string> letterCombinations(string digits)
    {
        res.clear();
        if(digits == "") {
            return res;
        }
        findCombination(digits, 0, "");
        return res;
    };
};

int main()
{

    return 0;
}
