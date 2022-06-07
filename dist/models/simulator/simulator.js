/// <reference path="../core/core.ts" />
var Simulators;
(function (Simulators) {
    const Transport_RestHttp = "resthttp";
    const Transport_RestHttps = "resthttps";
    const Transport_RabbitMQ = "rabbitmq";
    const Transport_MQTT = "mqtt";
    const Transport_IOT_HUB = "azureiothub";
    const Transport_AzureServiceBus = "azureservicebus";
    const Transport_Azure_EventHub = "azureeventhub";
    const Transport_AMQP = "amqp";
    const Transport_UDP = "udp";
    const Transport_TCP = "tcp";
    const PayloadTypes_Text = "text";
    const PayloadTypes_Binary = "binary";
    const PayloadTypes_GeoPath = "geopath";
    const HttpVerb_GET = "GET";
    const HttpVerb_POST = "POST";
    const HttpVerb_PUT = "PUT";
    const HttpVerb_DELETE = "DELETE";
    const QOS0 = "qos0";
    const QOS1 = "qos1";
    const QOS2 = "qos2";
})(Simulators || (Simulators = {}));
