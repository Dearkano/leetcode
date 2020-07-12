(function () {
    var test1 = function (args) {
        args.name = "lcc2";
        args = { name: "lcc3" };
    };
    var test2 = function (args) {
        args = { name: "lcc2" };
        args.name = "lcc3";
    };

    const params1 = { name: "lcc1" };
    test1.call(this, params1);
    console.log(JSON.stringify(params1));

    const params2 = { name: "lcc1" };
    test2(params2);
    console.log(JSON.stringify(params2));
})() 