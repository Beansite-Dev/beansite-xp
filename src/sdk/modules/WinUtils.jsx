import { TrackGoogleAnalyticsEvent } from "../../analytics/anayltics";
export const waitForElm=(selector)=>{
  return new Promise(resolve => {
      if (document.querySelector(selector)) {
        return resolve(document.querySelector(selector));}
      const observer = new MutationObserver(mutations => {
        if (document.querySelector(selector)) {
          observer.disconnect();
          resolve(document.querySelector(selector));
        }});
      observer.observe(document.body, {
        childList: true,
        subtree: true});
  });
}
function timeout(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
export const WinUtils={
  hideWindow:async(win_id,animate=true)=>{
    await waitForElm(`#win_${win_id}`);
    await waitForElm(`#${win_id}_tbi`);
    if(document.getElementById(`win_${win_id}`)&&
      document.getElementById(`${win_id}_tbi`)){
        if(animate){
          document.getElementById(`win_${win_id}`).style.transition="1s";
          document.getElementById(`${win_id}_tbi`).style.transition="1s";
          await timeout(1);
          document.getElementById(`win_${win_id}`).style.opacity="0";
          await timeout(250);
          document.getElementById(`${win_id}_tbi`).style.opacity="0";
          document.getElementById(`${win_id}_tbi`).style.transform="translateY(48vmin)";
          await timeout(750);
          document.getElementById(`win_${win_id}`).style.display="none";
          document.getElementById(`${win_id}_tbi`).style.display="none";
          document.getElementById(`win_${win_id}`).style.transition=".5s";
          document.getElementById(`${win_id}_tbi`).style.transition=".35s";
        } else {
          document.getElementById(`win_${win_id}`).style.display="none";
          document.getElementById(`${win_id}_tbi`).style.display="none";
        }
    } else {
      console.warn(`[SDK_ERROR] > REFRENCE_ERROR\n${win_id} does not exist`);
    }
  },
  openWindow:async(win_id)=>{
    await waitForElm(`#win_${win_id}`);
    await waitForElm(`#${win_id}_tbi`);
    TrackGoogleAnalyticsEvent(
      "opened_window",
      `Opened Window ${win_id}`,
      window.location.pathname+window.location.search,
      {win_id}
    );
    if(document.getElementById(`win_${win_id}`)&&
      document.getElementById(`${win_id}_tbi`)){
      document.getElementById(`win_${win_id}`).style.display="block";
      document.getElementById(`${win_id}_tbi`).style.display="flex";
      document.getElementById(`${win_id}_tbi`).style.opacity="0";
      document.getElementById(`${win_id}_tbi`).style.transform="translateY(48vmin)";
      document.getElementById(`win_${win_id}`).style.opacity="0";
      await timeout(1);
      document.getElementById(`win_${win_id}`).style.transition="1s";
      document.getElementById(`${win_id}_tbi`).style.transition="1s";
      document.getElementById(`win_${win_id}`).style.opacity="1";
      document.getElementById(`${win_id}_tbi`).style.opacity="1";
      document.getElementById(`${win_id}_tbi`).style.transform="translateY(0px)";
      await timeout(1000);
      document.getElementById(`win_${win_id}`).style.transition=".5s";
      document.getElementById(`${win_id}_tbi`).style.transition=".35s";
    } else {
      console.warn(`[SDK_ERROR] > REFRENCE_ERROR\n${win_id} does not exist`);
    }
  },
  getTheme:(settings)=>{
    var theme;
    switch(settings.theme){
      case "dark":theme="dark_icons";break;
      case "pink":theme="pink";break;
      case "green":theme="green";break;
      case "classic":default:theme="xp";break;
    }
    return theme;
  }
}