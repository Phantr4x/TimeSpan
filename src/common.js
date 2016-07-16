"use strict";

class Common {

}

Common.ELECTRON = "Electron";
Common.TIMESPAN = "TimeSpan";

Common.DEBUG_MODE = false;

Common.WINDOW_SIZE_TIMER = { width: 480, height: 768 };
Common.WINDOW_SIZE_STICKY = { width: 480, height: 768 };

Common.USER_AGENT = "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_1) AppleWebKit/537.36 (KHTML, like Gecko) " +
"Chrome/41.0.2227.1 Safari/537.36";

Common.GITHUB = "https://github.com/Phantr4x/TimeSpan"
Common.GITHUB_RELEASES = "https://github.com/Phantr4x/TimeSpan/releases";
Common.GITHUB_ISSUES = "https://github.com/Phantr4x/TimeSpan/issues";

Common.UPDATE_ERROR_ELECTRON = "Failed to get the local version. If you are using debug mode(by `npm start`), " +
"Common error would happen. Use packed app instead or manually check for updates.\n\n" + Common.GITHUB_RELEASES;
Common.UPDATE_ERROR_EMPTY_RESPONSE = "Failed to fetch release info.";
Common.UPDATE_ERROR_UNKNOWN = "Something went wrong.";
Common.UPDATE_NA_TITLE = "No Update Available";
Common.UPDATE_ERROR_NETWORK = "Connection hang up unexpectedly. Check your network settings.";
Common.UPDATE_ERROR_LATEST = (version)=> {
  return `You are using the latest version(${version}).`
};

module.exports = Common;
