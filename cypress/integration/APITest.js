//API testing
describe("My first Test suit", function() {

    it("First test", function() {

        // cy.request("POST", "http://216.10.245.166/Library/Addbook.php", {
        //     "name": "Learn Appium",
        //     "isbn": "bcd",
        //     "aisle": "22s",
        //     "author": "John Doe"
        // }).then(function(response) {
        //     expect(response.body).to.have.property("Msg", "successully added");
        //     expect(response.status).to.eq(200);
        // });

        cy.request("GET", "https://jsonplaceholder.typicode.com/posts/1").then(function(response) {
            expect(response.status).eq(200);
            expect(response.body).to.have.property("id");
            expect(response.body["userId"]).eq(1);
            expect(response.body["body"]).contains("quia");
            expect(response.headers).to.have.property("age");
            cy.log(response.body["userId"]);
        });

        cy.request('POST', 'https://reqres.in/api/users', {
            name: "nazar",
            job: "qa"
        }).then(function(response) {
            expect(response.status).eq(201);
            expect(response.body["name"]).eq("nazar");
            expect(response.body["job"]).eq("qa");
            expect(response.body).to.have.property("id");
            expect(response.headers).to.not.be.a("null");
            expect(response.headers).has.exist;

        })
    });

})