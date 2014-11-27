/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function () {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function () {
        console.log('Received Event: deviceready');

        var btnSi = $('[id=btnSi]');
        btnSi.addEventListener("click", app.onSi, false);

        var btnNo = $('[id=btnNo]');
        btnNo.addEventListener("click", app.onNo, false);
    },
    onSi: function (evt) {
        evt.preventDefault();
        console.log("Has votado Si en la votación: #" + $('[id=textVotacion]').val());

        var request = $.ajax({
            url: "http://demo0034470.mockable.io/votaciones/" + $('[id=textVotacion]').val() + "/yes",
            type: "POST",
            dataType: "json"
        });

        request.done(function (msg) {
            console.log("Los votos totales hasta ahora son: " + msg['votosTotal']);
        });

        request.fail(function (jqXHR, textStatus, errorThrown) {
            console.log("Error: " + errorThrown);
        });
    },
    onNo: function (evt) {
        evt.preventDefault();
        console.log("Has votado No en la votación: #" + $('[id=textVotacion]').val());

        var request = $.ajax({
            url: "http://demo0034470.mockable.io/votaciones/" + $('[id=textVotacion]').val() + "/no",
            type: "POST",
            dataType: "json"
        });

        request.done(function (msg) {
            console.log("Los votos totales hasta ahora son: " + msg['votosTotal']);
        });

        request.fail(function (jqXHR, textStatus, errorThrown) {
            console.log("Error: " + errorThrown);
        });
    }
};