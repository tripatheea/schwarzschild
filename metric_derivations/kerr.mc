kill(all);

load(ctensor);
dim: 4;
ct_coords: [t, r, theta, phi ];

alpha: J/M/c;
rho2: r^2 + alpha^2 * cos(theta)^2;
del: r^2 - r_s*r + alpha^2;

/*depends(rho2, [r, theta]);
depends(del, r );*/

lg: matrix(
  [ (1 - r-s*r/rho^2)*c^2, 0, 0, 2*r_s*r*alpha*sin(theta)^2/rho2*c ],
  [ 0, -rho2/del, 0, 0],
  [ 0, 0, -rho2, 0],
  [ 2*r_s*r*alpha*sin(theta)^2/rho2*c, 0, 0,  -(r^2 + alpha^2 + r_s*r*alpha^2/rho2) * sin(theta)^2 ]
);

cmetric();
