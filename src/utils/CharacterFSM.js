import FiniteStateMachine from "./FiniteStateMachine";
import IdleState from "./IdleState";
import RunState from "./RunState";
import WalkState from "./WalkState";

class CharacterFSM extends FiniteStateMachine {
  constructor(proxy) {
    super();
    this._proxy = proxy;
    this._Init();
  }

  _Init() {
    this._AddState("idle", IdleState);
    this._AddState("walk", WalkState);
    this._AddState("run", RunState);
  }
}

export default CharacterFSM;
