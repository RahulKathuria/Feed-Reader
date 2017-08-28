/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */
/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite 
     */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. 
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* Test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
        it('is Url defined and not empty', function() {
            var i;
            for (i = 0; i < allFeeds.length; i++) {
                expect(allFeeds[i].url).toBeDefined();
                expect(allFeeds[i].url.length).not.toBe(0);
            }
        });

        /* Test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
        it('is name defined and not empty', function() {
            var i;
            for (i = 0; i < allFeeds.length; i++) {
                expect(allFeeds[i].name).toBeDefined();
                expect(allFeeds[i].name.length).not.toBe(0);
            }
        });

    });




    /*  Test suite named "The menu" */
    describe('The menu', function() {

        /*  Test that ensures the menu element is
         * hidden by default. 
         */
        it('is function hidden by default', function() {
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });

        /* Test that ensures the menu changes
         * visibility when the menu icon is clicked. */

        it('is Visibility changed when clicked', function() {
            $('.menu-icon-link').click();
            expect($('body').hasClass('menu-hidden')).not.toBe(true);
            $('.menu-icon-link').click();
            expect($('body').hasClass('menu-hidden')).not.toBe(false);
        });
    });




    /*  Test suite named "Initial Entries" */
    describe('Initial Entries', function() {

        beforeEach(function(done) {
            loadFeed(0, done);
        });
        /* Test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.*/

        it('is there atleast single entry', function() {
            expect($('.feed .entry').length >= 1).toBe(true);
        });
    });




    /* Test suite named "New Feed Selection" */
    describe('New Feed Selection', function() {
        var oldFeed;
        var newFeed;
        beforeEach(function(done) {
            loadFeed(0, function() {
                oldFeed = $('.feed').html();
                loadFeed(1, function() {
                    newFeed = $('.feed').html();
                    done();
                });
            });
        });
        /* Test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.*/

        it('is New Feed loaded', function() {
            expect(oldFeed).not.toBe(newFeed);
        });
    });


}());