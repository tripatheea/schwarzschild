c = 1.0 # Canonical coordinates?
rs = 1.0 # No reason, is there? Just a nice number


var deriv = function(y,s) {
	return new Array([
		y[4], y[5], y[6], y[7],
		rs*0.5/y[0]/(y[0]-rs)*y[4]*y[4] +
		 	(y[0]-rs)*y[5]*y[5] +
			(y[0]-rs)*Math.pow(np.sin(y[1])*y[6],2) +
			c*c*rs*(rs-y[0])*0.5/Math.pow(y[0],3)*y[7]*y[7],
		-2.0/y[0]*y[4]*y[5] + np.sin(y[1])*np.cos(y[1])*y[6]*y[6],
		-2.0/y[0]*y[4]*y[6] - 2.0/np.tan(y[1])*y[5]*y[6],
		rs/y[0]/(rs-y[0])*y[4]*y[7]
	]);
}

// Rectangular coordinates -> Spherical coordinates
var xyz_to_rpt = function(xR) {
	var ret = new Array(3);
	ret[0] = Math.sqrt(xR[0]*xR[0]+xR[1]*xR[1]+xR[2]*xR[2]);
	ret[1] = Math.acos(xR[2]/ret[0]);
	ret[2] = Math.atan2(xR[1],xR[0]);
	return ret;
}

// Rectangular velocity -> Spherical velocity
var dxyz_to_drpt = function(x, dxR) {
  return new Array([
     Math.cos(x[2])*Math.sin(x[1])*dxR[0] +
	 Math.sin(x[2])*Math.sin(x[1])*dxR[1] +
	 Math.cos(x[1])*dxR[2],

     Math.cos(x[2])*Math.cos(x[1])/x[0]*dxR[0] +
	 Math.sin(x[2])*Math.cos(x[1])/x[0]*dxR[1] -
	 Math.sin(x[1])/x[0]*dxR[2],

    -Math.sin(x[2])/Math.sin(x[1])/x[0]*dxR[0] +
	 Math.cos(x[2])/Math.sin(x[1])/x[0]*dxR[1]
  ]);
}


# Initial conditions
x0 = xyz_to_rpt([ 2.0, 0.0, 0.0]);
x0d= dxyz_to_drpt(x0,[ y0, 0.25, 0.0]);

# Pack the initial conditions into an array
y0 = new Array([  x0[0],  x0[1],  x0[2], 0.0, x0d[0], x0d[1], x0d[2], 1.0 ])

