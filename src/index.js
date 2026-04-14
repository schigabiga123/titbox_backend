const net = require('net');

const client = new net.Socket();

client.connect(5000, '192.168.21.30', () => {
  console.log('✅ Connected to data port 5000');

  // 🔥 próbák
  //client.write('\n');
});

client.on('data', (data) => {
  console.log('📦 RAW:', data.toString());
});

client.on('error', (err) => {
  console.error('❌ Error:', err.message);
});

client.on('close', () => {
  console.log('🔌 Connection closed');
});



/*const HOST = '192.168.21.30';

const CONCURRENCY = 100; // mennyi párhuzamos kapcsolat


function scanPort(port) {
  return new Promise((resolve) => {
    const socket = new net.Socket();

    socket.setTimeout(500);

    socket.connect(port, HOST, () => {
      console.log(`✅ OPEN: ${port}`);

      socket.on('data', (data) => {
        console.log(`📦 DATA [${port}]:`, data.toString());
      });

      resolve();
    });

    socket.on('timeout', () => {
      socket.destroy();
      resolve();
    });

    socket.on('error', () => {
      resolve();
    });
  });
}

async function worker() {
await scanPort(23);
}

async function run() {
  const workers = [];

    workers.push(worker());

  await Promise.all(workers);

  console.log('✅ Scan finished');
}

run();*/

/*const net = require('net');

async function readWeightOnce() {
  return new Promise((resolve) => {
    const client = new net.Socket();
    let buffer = '';

    client.connect(5000, '192.168.21.30', () => {
      //setTimeout(() => client.write('\n'), 300);
        setTimeout(() => client.write('\n'), 2000);
    });

    client.on('data', (data) => {
      buffer += data.toString();
    });

    client.on('close', () => {
      const match = buffer.match(/ST,GS,\s*(\d+)/);
      if (match) {
        resolve(parseInt(match[1], 10));
      } else {
        resolve(null);
      }
    });

    client.on('error', (error) => {
        console.log('❌ ERROR:', error.message);
        resolve('Hiba');
    });

    setTimeout(() => {
      client.destroy();
      resolve(null);
    }, 2000);
  });
}

// 🔁 polling
setInterval(async () => {
  const weight = await readWeightOnce();
  console.log('⚖️', weight);
}, 2000);*/