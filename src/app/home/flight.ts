export class Flight{
    constructor(
        public id: number,
	    public flightName: string,
	    public source: string,
	    public destination: string,
	    public fare: number
    ){}
}