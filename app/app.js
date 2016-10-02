
// app.js - Business logic here
 
    // Creating module with name cordovaApp
    var scotchApp = angular.module('cordovaApp', []);

    // creating the controller and inject Angular's $scope
    scotchApp.controller('mainController', function($scope) {

        // create a message to display in our view
        $scope.message = 'Excited to build hybrid app!';
		$scope.showImage=false;
		
		//Function to capture image
		$scope.captureImage = function() {
		     $scope.showImage=true;
			 if(navigator.camera){
						navigator.camera.getPicture(this.onSuccess, this.onFail, { quality: 25,
						 destinationType: Camera.DestinationType.FILE_URI,
						 saveToPhotoAlbum:true
					 });
			}
			else{
			   alert("camera not found");
			
			}  
		};
		
		$scope.newImage = function() {
			$scope.showImage=false;
		};
   
        $scope.onSuccess=function(imageUri) {
		
		     
				  $scope.showImage=true;
			      var image = document.getElementById('capturedImage');
			      image.src =imageUri;
			}

	    $scope.onFail=function (message) {
				alert('Failed because: ' + message);
			}
		
    });