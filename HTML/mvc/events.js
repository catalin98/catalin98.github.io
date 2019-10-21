class t_lista_events{
	constructor(){
		events = [];
		
	}
	add_event(this.event_name, this.listener)
	{
		if (this.events.length == 0)
		{
			this.events.push(event_name);
			this.events[event_name] = [];
		}
		else
			if (this.events.indexOf(event name) == -1){
				this.events.push(event_name);
			this.events[event_name] = [];
			}
			this.events[event_name].push(listener);
	}
	call_event(event_name, args)
	{
		this.events[event_name].forEach(f => f(args));
	}
}
		