var labelStyle : GUIStyle;

function Update () {
  if (Input.GetButtonDown("Jump")){
    Application.LoadLevel("Maze");
  }
}

function OnGUI () {
  var sw = Screen.width;
  var sh = Screen.height;
  GUI.Label(Rect(0, sh / 6, sw, sh / 6), "BALL MAZE", labelStyle);
  GUI.Label(Rect(0, sh / 4, sw, sh / 6), "↑", labelStyle);
  GUI.Label(Rect(0, sh / 3, sw, sh / 6), "← Space →", labelStyle);
  GUI.Label(Rect(0, sh / 2, sw, sh / 6), "↓", labelStyle);
//  GUI.Label(Rect(0, sh / 1, sw, sh / 6), "Hit Space Key", labelStyle);
}