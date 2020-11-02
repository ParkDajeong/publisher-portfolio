$(function() {
  $(".intro__text-box").addClass("ani");

  setTimeout(function() {
    $(".intro__text--hide").addClass("ani");
    $(".scroll-down-arrow").addClass("ani");
  }, 1500);

  // Typing
  const textList = ["항상 발전하기 위해 노력하는", "소통하는 것이 즐거운", "습득력이 뛰어난" , "배움이 즐거운"];
  let currentTextIdx = 0;
  let welcomeText = textList[currentTextIdx];
  let currentIdx = 0;
  let deleteTimerID = null;
  let typingTimerID = null;

  function deleteText() {
    deleteTimerID = setInterval(function() {
      const text = $(".typing").html();
      if(text.length > 0){
        $(".typing").html(text.slice(0, -1));
      } else {
        clearInterval(deleteTimerID);
        currentTextIdx = currentTextIdx === textList.length - 1 ? 0 : currentTextIdx + 1;
        welcomeText = textList[currentTextIdx];
        currentIdx = 0;
        setTimeout(onTextTyping, 1000);
      }
    }, 150);
  }
  
  function onTextTyping() {
    typingTimerID = setInterval(function() {
      if(currentIdx <= welcomeText.length) {
        $(".typing").append(welcomeText[currentIdx++]);
      } else {
        clearInterval(typingTimerID);
        setTimeout(deleteText, 1000);
      }
    }, 200);
  }

  setTimeout(function() {
    deleteText();
  }, 5500);
});