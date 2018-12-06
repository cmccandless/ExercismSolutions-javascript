export const validate = (input) => input == function(s) {
    return s.split("").reduce(
        (a, d) => a + parseInt(d) ** s.length,
        0
    );
}(input.toString());