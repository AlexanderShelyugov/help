# SRT

SRT (Secure Reliable Transport) is an UDP based protocol with high stability and security.
[Read more](/en/codex/#/protocols/srt)

## Caller address format

In the caller mode receiver sends request to the transmitter.

```
srt://host:port[#options]
```

- `host` – remote server address
- `port` – remote port

Options:

- `streamid=ID` – stream identifier
- `passphrase=PASS` – password for the encrypted transmission. Password length should be in range 10 .. 79 characters
- `pbkeylen=N` – crypto key length in bytes. Possible values: 16, 24, 32
- `tsbpdmode` – timestamp-based packet delivery mode

## Listener address format

In the listener mode receiver awaits request from the transmitter.

```
srt://[interface]@:port[#options]
```

- `interface` – name of the local interface. If interface is not defined Astra accept requests from any interface
- `port` – local port

Options:

- `tsbpdmode` – timestamp-based packet delivery mode