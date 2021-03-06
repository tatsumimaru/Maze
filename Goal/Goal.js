var labelStyle : GUIStyle;

private var ballCount : int;    //amount of balls
private var counter : int;      //balls at goal
private var cleared : boolean;  //cleared

// When it started
function Start () {
  ballCount = GameObject.FindGameObjectsWithTag("Ball").length;
}

// When some gameobject touch the trigger
function OnTriggerEnter (other : Collider) {
  // find ball tag and count it
    if (other.gameObject.tag == "Ball") {
      counter++;
      if (cleared == false && counter == ballCount) {
        // When it's cleared!
        cleared = true;
        Debug.Log("Cleared!");
        yield WaitForSeconds(8.0);
        Application.LoadLevel("Title");
        }
    }
}

// When a gameobject go through the trigger
function OnTriggerExit(other : Collider) {
  // reduce the count after recognize ball tag
  if (other.gameObject.tag == "Ball"){
    counter--;
  }
}

//GUI Class
function OnGUI () {
  if (cleared == true) {
    var sw : int = Screen.width;
    var sh : int = Screen .height;
    GUI.Label(Rect(sw / 6, sh / 3, sw * 2 /3, sh / 3), "CLEARED!!", labelStyle);
  }
}

