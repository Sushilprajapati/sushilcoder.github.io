

function submit() {
    mm = 0, ad = 0, st = 0, ag = 0, cm = 0, m = 0, d = 0, th = 0, lo = 0, e = 0;
    for (i = 1; i <= 10; i++) {
        if (document.getElementById("q" + i + "a").checked) {
            mm++;
        }
    }
    for (i = 0; i < 10; i++)
        if (document.getElementById("q" + (i * 10 + 1) + "b").checked)
            mm++;

    console.log(mm);
    // for ad 
    for (i = 11; i <= 20; i++) {
        if (document.getElementById("q" + i + "a").checked) {
            ad++;
        }
    }
    for (i = 0; i < 10; i++)
        if (document.getElementById("q" + (i * 10 + 2) + "b").checked)
            ad++;

    console.log(ad);
    // for st
    for (i = 21; i <= 30; i++) {
        if (document.getElementById("q" + i + "a").checked) {
            st++;
        }
    }
    for (i = 0; i < 10; i++)
        if (document.getElementById("q" + (i * 10 + 3) + "b").checked)
            st++;

    console.log(st);
    // for ag
    for (i = 31; i <= 40; i++) {
        if (document.getElementById("q" + i + "a").checked) {
            ag++;
        }
    }
    for (i = 0; i < 10; i++)
        if (document.getElementById("q" + (i * 10 + 4) + "b").checked)
            ag++;
    console.log(mm);
    // for cm
    for (i = 41; i <= 50; i++) {
        if (document.getElementById("q" + i + "a").checked) {
            cm++;
        }
    }
    for (i = 0; i < 10; i++)
        if (document.getElementById("q" + (i * 10 + 5) + "b").checked)
            cm++;
    console.log(cm);
    // for m
    for (i = 51; i <= 60; i++) {
        if (document.getElementById("q" + i + "a").checked) {
            m++;
        }
    }
    for (i = 0; i < 10; i++)
        if (document.getElementById("q" + (i * 10 + 6) + "b").checked)
            m++;

    console.log(m);

    // for d
    for (i = 61; i <= 70; i++) {
        if (document.getElementById("q" + i + "a").checked) {
            d++;
        }
    }
    for (i = 0; i < 10; i++)
        if (document.getElementById("q" + (i * 10 + 7) + "b").checked)
            d++;

    console.log(d);
    // for th
    for (i = 71; i <= 80; i++) {
        if (document.getElementById("q" + i + "a").checked) {
            th++;
        }
    }
    for (i = 0; i < 10; i++)
        if (document.getElementById("q" + (i * 10 + 8) + "b").checked)
            th++;

    console.log(th);
    // for lo
    for (i = 81; i <= 90; i++) {
        if (document.getElementById("q" + i + "a").checked) {
            lo++;
        }
    }
    for (i = 0; i < 10; i++)
        if (document.getElementById("q" + (i * 10 + 9) + "b").checked)
            lo++;

    console.log(lo);

    // for e
    for (i = 91; i <= 100; i++) {
        if (document.getElementById("q" + i + "a").checked) {
            e++;
        }
    }
    for (i = 0; i < 10; i++)
        if (document.getElementById("q" + (i * 10 + 10) + "b").checked)
            e++;

    console.log(e);
   
localStorage.setItem("mm",mm);
localStorage.setItem("ad",ad);
localStorage.setItem("st",st);
localStorage.setItem("ag",ag);
localStorage.setItem("cm",cm);
localStorage.setItem("m",m);
localStorage.setItem("d",d);
localStorage.setItem("th",th);
localStorage.setItem("lo",lo);
localStorage.setItem("e",e);


// progress result style
// p = document.getElementById("MM").innerHTML;
// console.log(p);
window.open("resultway.html","_self");
 
 if(history.back())
 localStorage.clear();

   
}



