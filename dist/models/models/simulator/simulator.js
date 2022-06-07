/// <reference path="../core/core.ts" />
var Simulators;
(function (Simulators) {
    var Transport_RestHttp = "resthttp";
    var Transport_RestHttps = "resthttps";
    var Transport_RabbitMQ = "rabbitmq";
    var Transport_MQTT = "mqtt";
    var Transport_IOT_HUB = "azureiothub";
    var Transport_AzureServiceBus = "azureservicebus";
    var Transport_Azure_EventHub = "azureeventhub";
    var Transport_AMQP = "amqp";
    var Transport_UDP = "udp";
    var Transport_TCP = "tcp";
    var PayloadTypes_Text = "text";
    var PayloadTypes_Binary = "binary";
    var PayloadTypes_GeoPath = "geopath";
    var HttpVerb_GET = "GET";
    var HttpVerb_POST = "POST";
    var HttpVerb_PUT = "PUT";
    var HttpVerb_DELETE = "DELETE";
    var QOS0 = "qos0";
    var QOS1 = "qos1";
    var QOS2 = "qos2";
})(Simulators || (Simulators = {}));
