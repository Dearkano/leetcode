var longestDupSubstring = function(S) {
    const SIZE = S.length
    let low = 1, high = SIZE-1, mid, maxStr = '';
    
    // Binary Search
    while(low <= high) {
        mid = Math.floor((low+high)/2);
        const startIdx = rollingHash(mid);
        
        if(startIdx !== false) {
            maxStr = S.slice(startIdx, startIdx+mid);
            low = mid+1;
        } else high = mid-1;
    }
    
    // Rolling hash algorithm
    function rollingHash(len) {
        const charArr = [];
        const map = new Set();
        const PRIME = 2 ** 32;
        const BASE = 26;

        // convert string to char code array
        for (let i = 0; i < SIZE; i++) {
            charArr.push(S[i].charCodeAt() - 96);
        }

        // const value that is used often (26 ** len % mod)
        let MOST_SIG_DIGIT = 1, temp = len;
        // generate the most significat digit
        while (temp--) MOST_SIG_DIGIT = (MOST_SIG_DIGIT * BASE) % PRIME;

        let hashKey = 0;
        
        // build the initial hash
        for (let i = 0; i < len; i++) {
            hashKey = (hashKey * BASE + charArr[i]) % PRIME;
        }

        map.add(hashKey);

        for (let i = len; i < SIZE; i++) {
            hashKey *= BASE;
            // remove the first char
            hashKey = hashKey - ((MOST_SIG_DIGIT * charArr[i - len]) % PRIME) + PRIME;
            // add the next char
            hashKey = (hashKey + charArr[i]) % PRIME;

            if (map.has(hashKey)) return i - len + 1;
            map.add(hashKey);
        }
        return false;
    }
    return maxStr;
};