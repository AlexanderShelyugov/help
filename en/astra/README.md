# Cesbo Astra

Astra is a professional software for TV streaming.

## Receiving

- Broadcast – Satellite, Cable, or Terrestrials:
    - ATSC
    - DVB
    - ISDB-T
- IP
    - [UDP Multicast or Unicast](input/udp.md)
    - [HTTP MPEG-TS](input/http.md)
    - [HLS](input/hls.md)
    - [SRT](input/srt.md)
    - [RTSP](input/rtsp.md)
    - RTP

## Transmitting

- IP
    - [UDP Multicast or Unicast](output/udp.md)
    - HTTP MPEG-TS
    - HLS
    - [SRT](output/srt.md)
    - RTP
- Broadcast
    - DigitalDevices RESI DVB-C Modulator
    - TBS 6004 DVB-C Modulator

## Processing

- Demultiplex
- Multiplex
- Filter
- Remap
- Redundant sources
- Descrambling: DVB-CI, CAS Client
- Scrambling: DVB SimulCrypt

## Analyzing and Monitoring

- Realtime analyzig active inputs
- Integration with Zabbix for reports and notifications
- Integration with Grafana for charts and reports
- Built-in realtime monitoring

## Miscellaneous

- Web interface for management and monitoring
- Access authentication
- Integration with third-party middlewares
- API for management and moitoring
