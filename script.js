function send_request(http) {
    let res = fetch(http);
    let json = res.json();

    alert(json);
}

let alphabet = ['a', 'b', 'c', 'd'];

function find_index(symbol) {
    for (let i = 0; i < alphabet.length; i++) {
        if (alphabet[i] == symbol) {
            return i;
        }
    }
}

function shifr(s) {
    let k = 3;
    
    for (let i = 0; i < s.length; i++) {
        let index = (find_index(s[i]) + k) % alphabet.length;
        s[i] = alphabet[index];
    }
}