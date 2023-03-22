// import the `Kafka` instance from the kafkajs library
const { Kafka } = require("kafkajs");

// the client ID lets kafka know who's producing the messages
const clientId = "cts-app";
// we can define the list of brokers in the cluster
const brokers = ["kafka-internal.io:9092"];

// initialize a new kafka client and initialize a producer from it
const kafka = new Kafka({ clientId, brokers });
const producer = kafka.producer();

// we define an async function that writes a new message each second
const produce = async (topic, message) => {
  await producer.connect();
  let i = 0;

  // after the produce has connected, we start an interval timer
  try {
    // send a message to the configured topic with
    // the key and value formed from the current value of `i`
    await producer.send({
      topic,
      messages: [
        {
          key: String(i),
          value: message,
        },
      ],
    });

    // if the message is written successfully, log it and increment `i`
    console.log("writes: ", message);
    console.log("in topic: ", topic);
    i++;
  } catch (err) {
    console.error("could not write message " + err);
  }
};

module.exports = produce;
