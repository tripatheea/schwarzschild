kill(all);

load(ctensor);
dim: 4;
ct_coords: [r, theta, phi, t];

lg: matrix(
  [ (1-r_s/r)^-1, 0, 0, 0 ],
  [ 0, r^2, 0, 0 ],
  [ 0, 0, r^2 * sin(theta)^2, 0 ],
  [ 0, 0, 0, -c^2 * (1-r_s/r) ]
);

cmetric();
