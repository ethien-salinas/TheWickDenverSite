angular.module('theWickSiteApp', [])

	.factory('servicesFactory', [function() {
		var services = {};
		services.getServices = function(){
			return servicesArray;
		}
		return  services;
	}])

	.factory('projectsFactory', [function() {
		var projects = {};
		projects.getProjects = function(){
			return projectsArray;
		}
		return  projects;
	}])

    .controller('IndexController', [
    	'$scope',
    	'servicesFactory',
    	'projectsFactory',
    	function($scope, servicesFactory, projectsFactory){
        $scope.services = servicesFactory.getServices();
        $scope.projects = projectsFactory.getProjects();
    }])

;

var servicesArray = [
	{
		title: 'Creative Arts Education',
		icon: 'fa fa-book fa-stack-1x fa-inverse',
		paragraphs: [
			{
				title: 'Music Lessons & Classes:',
				body: 'Guitar, Bass Guitar, Piano, Mandolin, Singing, Trumpet, Drums, Ukulele, Music Theory, Music Recording and Engineering.'
			},
			{
				title: 'Arts & Crafts Lessons & Classes:',
				body: 'Painting, Drawing, Ceramics, Jewelry, Knitting, Paper Crafts, Weaving, Photography.'
			}
		]
	},
	{
		title: 'Sustainability',
		icon: 'fa fa-leaf fa-stack-1x fa-inverse',
		paragraphs: [
			{
				title: 'Gardening Lessons & Classes:',
				body: 'Soil Amendment, Composting, Plant Spacing, Seed Planting, Maintenance, Watering, Sunlight, Fertilizing, Harvesting, Greenhouse growing, Indoor Growing, egg producing fowls.'
			},
			{
				title: 'Cooking, Canning & Nutrition Classes:',
				body: 'Garden Ingredient Cooking, Nutrition, Canning, Storage, Meal Planning.'
			}
		]
	},
	{
		title: 'Community Outreach',
		icon: 'fa fa-group fa-stack-1x fa-inverse',
		paragraphs: [
			{
				title: '',
				body: 'Working to better our local community is an amazing way to make big change. There are multiple ways to get involved.'
			},
			{
				title: 'Volunteer Services:',
				body: 'Yard & Home Cleanups, Garden Builds, Minor Home Repairs, Trash Removal, Graffiti Removal. You can even serve madatory community service.'
			}
		]
	},
];

var projectsArray = [
	{
		title: 'William Smith High School Intensive',
		img: 'img/portfolio/roundicons.png',
		href: '#portfolioModal1',
		date: 'October 2014'
	},
	{
		title: 'Seniors\' Resource Center Deck Build',
		img: 'img/portfolio/startup-framework.png',
		href: '#portfolioModal2',
		date: 'October 2014'
	},
	{
		title: 'Rocky Votolato Living Room Show',
		img: 'img/portfolio/treehouse.png',
		href: '#portfolioModal3',
		date: 'August 2014 and March 2015'
	},
	{
		title: 'Eagleton Elementary Community Garden',
		img: 'img/portfolio/golden.png',
		href: '#portfolioModal4',
		date: 'May 2015'
	},
	{
		title: 'ACS Lift Food Bank Garden',
		img: 'img/portfolio/escape.png',
		href: '#portfolioModal5',
		date: 'May 2015'
	},
	{
		title: 'Denison Montessori Elementary Garden',
		img: 'img/portfolio/dreams.png',
		href: '#portfolioModal6',
		date: 'June 2015'
	},
];