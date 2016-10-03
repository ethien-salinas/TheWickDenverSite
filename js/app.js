angular.module('theWickSiteApp', [])

	.factory('servicesFactory', [function() {
		var services = {};
		services.getServices = function(){
			return [
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
		}
		return  services;
	}])

    .controller('IndexController', ['$scope', 'servicesFactory', function($scope, servicesFactory){
        $scope.services = servicesFactory.getServices();
    }])
;