/*
Copyright 2015, 2016 OpenMarket Ltd

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

'use strict';

var React = require('react');

const i = [1, 2, 3, 4, 5][Math.floor(Math.random() * 5)];
const DEFAULT_LOGO_URI = "img/logos/riot-logo-" + i + ".svg";

module.exports = React.createClass({
    displayName: 'VectorLoginHeader',
    statics: {
        replaces: 'LoginHeader',
    },
    propTypes: {
        icon: React.PropTypes.string,
    },

    render: function() {
        return (
            <div className="mx_Login_logo">
                <img src={this.props.icon || DEFAULT_LOGO_URI} alt="Riot"/>
            </div>
        );
    }
});
