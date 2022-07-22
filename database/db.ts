import mongoose from 'mongoose';

/**
 * 0 = disconnected
 * 1 = connected
 * 2 = connecting
 * 2 = disconnecting
 */

const monGooConnection = {
  isConnected: 0,
};

export const connect = async () => {
  if (monGooConnection.isConnected) {
    console.log('Ya estamos conectados');
    return;
  }

  if (mongoose.connections.length > 0) {
    monGooConnection.isConnected = mongoose.connections[0].readyState;

    if (monGooConnection.isConnected === 1) {
      console.log('Usando conexión anterior');
      return;
    }

    await mongoose.disconnect();
  }

  await mongoose.connect('....');
  monGooConnection.isConnected = 1;
  console.log('Coenctado a MongoDB:', '....');
};

export const disconnect = async () => {
  if (monGooConnection.isConnected !== 0) return;
  await mongoose.disconnect();
};
