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
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
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


        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
           it('is Url defined and not empty', function(){
           var i;
           for(i=0;i<allFeeds.length;i++)
           {
             expect(allFeeds[i].url).toBeDefined();
             expect(allFeeds[i].url.length).not.toBe(0);
           }
         });

        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
         it('is name defined and not empty', function(){
           var i;
           for(i=0;i<allFeeds.length;i++)
           {
             expect(allFeeds[i].name).toBeDefined();
             expect(allFeeds[i].name.length).not.toBe(0);
           }
         });

    });


    /* TODO: Write a new test suite named "The menu" */

        /* TODO: Write a test that ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */

         
         describe('The menu',function(){
         	it('is function hidden by default',function(){
         		expect($('body').hasClass('menu-hidden')).toBe(true);
         	});


         	it('is Visibility changed when clicked',function(){
         		 $('.menu-icon-link').click();
            	 expect($('body').hasClass('menu-hidden')).not.toBe(true);
            	 $('.menu-icon-link').click();
            	 expect($('body').hasClass('menu-hidden')).not.toBe(false);
         	});
         });

    /* TODO: Write a new test suite named "Initial Entries" */

        /* TODO: Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */
         describe('Initial Entries',function(){
         	beforeEach(function(done){
         		loadFeed(0,done);
         	});
         	it('is there atleast single entry',function(){
         		expect($('.feed .entry').length>=1).toBe(true);
         	});
         });
    /* TODO: Write a new test suite named "New Feed Selection" */

        /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */
         describe('Feed Selection',function(){
         	var oldFeed;
         	var newFeed;
         	beforeEach(function(done){
         		loadFeed(0,function(){
         			oldFeed = $('.feed').html();
         			loadFeed(1,function(){
         				newFeed = $('.feed').html();
         				done();
         			});
         		});
         	});
         	it('is New Feed loaded',function(){
         		expect(oldFeed).not.toBe(newFeed);
         	});
         });


}());
