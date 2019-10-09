angular.module("phoneList").component('phoneList', {  // This name is what AngularJS uses to match to the `<phone-list>` element.
    /*template:
        ` <div class="ctrl">
        <p>{{$ctrl.description}}</p>
        <ul>
            <li ng-repeat="phone in $ctrl.phones">
                <span>{{phone.name}}</span>
                <p>{{phone.snippet}}</p>
            </li>
        </ul>
    </div>`,*/
    templateUrl: 'phone-list/phone-list.template.html',
    controller: ["$http", function PhoneListController($http) {
        // this.description = "Nessa div eu uso o component phoneList com template";
        // this.phones = [
        //     {
        //         name: 'Nexus S',
        //         snippet: '2 - Fast just got faster with Nexus S.',
        //         age: 3
        //     }, {
        //         name: 'Motorola XOOM™ with Wi-Fi',
        //         snippet: '3 - The Next, Next Generation tablet.',
        //         age: 2
        //     }, {
        //         name: 'MOTOROLA XOOM™',
        //         snippet: '1 - The Next, Next Generation tablet.',
        //         age: 1
        //     }
        // ];

        // this.orderProp = 'age';

        var self = this;
        self.orderProp = 'age';

        $http.get('phones/phones.json').then(function (response) {
            self.phones = response.data;
        });
    }]
});