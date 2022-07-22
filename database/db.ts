import mongoose from 'mongoose';

/**
 * 0 = disconnected
 * 1 = connected
 * 2 = connecting
 * 3 = disconnecting
 */

const monGooConnection = {
  isConnected: 0,
};

export const connect = async () => {
  if (monGooConnection.isConnected) {
    console.log('Ya estabamos conectados');
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

  await mongoose.connect(process.env.MONGO_URL || '');
  monGooConnection.isConnected = 1;
  console.log('Conectado a MongoDB:', process.env.MONGO_URL);
};

export const disconnect = async () => {
  console.log(mongoose.connections.length);
  if (monGooConnection.isConnected === 0) return;
  await mongoose.disconnect();
  console.log('Desconectado de mongoDB');
  console.log(mongoose.connections.length);
};
