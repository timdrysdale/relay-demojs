export const getConnectionCount = (state) => state.connectionCount;
export const getConnectionsDropped = (state) => state.connectionsDropped;
export const getConnectionIsDropped = (state) => state.connectionIsDropped;
export const getConnectionDroppedAt = (state) => state.connectionDroppedAt;

export const getConnectionsMade = (state) => state.connectionsMade;

export const getStreamsObtained = (state) => state.streamsObtained;
export const getStreams = (state) => state.streams;
export const getStream = (state, what) => {
  return (what) => {
    if (!state.streamsObtained) {
      return {};
    }
    var results = state.streams.filter((obj) => {
      return obj.for == what;
    });
    if (results.length < 1) {
      return {};
    } else {
      return results[0];
    }
  };
};
export const getVideoBytes = (state) => state.videoBytes;
export const getLastVideoBytes = (state) => state.lastVideoBytes;
export const getVideoURL = (state) => state.videoURL;
export const getVideoURLObtained = (state) => state.videoURLObtained;
export const getDataURL = (state) => state.dataURL;
export const getDataURLObtained = (state) => state.dataURLObtained;
export const getExpiryObtained = (state) => state.expiryObtained;
export const getExpiry = (state) => state.expiry;
