var table = [
	"H", "Hydrogen", "1.00794", 1, 1,
	"He", "Helium", "4.002602", 18, 1,
	"Li", "Lithium", "6.941", 1, 2,
	"Be", "Beryllium", "9.012182", 2, 2,
	"B", "Boron", "10.811", 13, 2,
	"C", "Carbon", "12.0107", 14, 2,
	"N", "Nitrogen", "14.0067", 15, 2,
	"O", "Oxygen", "15.9994", 16, 2,
	"F", "Fluorine", "18.9984032", 17, 2,
	"Ne", "Neon", "20.1797", 18, 2,
	"Na", "Sodium", "22.98976...", 1, 3,
	"Mg", "Magnesium", "24.305", 2, 3,
	"Al", "Aluminium", "26.9815386", 13, 3,
	"Si", "Silicon", "28.0855", 14, 3,
	"P", "Phosphorus", "30.973762", 15, 3,
	"S", "Sulfur", "32.065", 16, 3,
	"Cl", "Chlorine", "35.453", 17, 3,
	"Ar", "Argon", "39.948", 18, 3,
	"K", "Potassium", "39.948", 1, 4,
	"Ca", "Calcium", "40.078", 2, 4,
	"Sc", "Scandium", "44.955912", 3, 4,
	"Ti", "Titanium", "47.867", 4, 4,
	"V", "Vanadium", "50.9415", 5, 4,
	"Cr", "Chromium", "51.9961", 6, 4,
	"Mn", "Manganese", "54.938045", 7, 4,
	"Fe", "Iron", "55.845", 8, 4,
	"Co", "Cobalt", "58.933195", 9, 4,
	"Ni", "Nickel", "58.6934", 10, 4,
	"Cu", "Copper", "63.546", 11, 4,
	"Zn", "Zinc", "65.38", 12, 4,
	"Ga", "Gallium", "69.723", 13, 4,
	"Ge", "Germanium", "72.63", 14, 4,
	"As", "Arsenic", "74.9216", 15, 4,
	"Se", "Selenium", "78.96", 16, 4,
	"Br", "Bromine", "79.904", 17, 4,
	"Kr", "Krypton", "83.798", 18, 4,
	"Rb", "Rubidium", "85.4678", 1, 5,
	"Sr", "Strontium", "87.62", 2, 5,
	"Y", "Yttrium", "88.90585", 3, 5,
	"Zr", "Zirconium", "91.224", 4, 5,
	"Nb", "Niobium", "92.90628", 5, 5,
	"Mo", "Molybdenum", "95.96", 6, 5,
	"Tc", "Technetium", "(98)", 7, 5,
	"Ru", "Ruthenium", "101.07", 8, 5,
	"Rh", "Rhodium", "102.9055", 9, 5,
	"Pd", "Palladium", "106.42", 10, 5,
	"Ag", "Silver", "107.8682", 11, 5,
	"Cd", "Cadmium", "112.411", 12, 5,
	"In", "Indium", "114.818", 13, 5,
	"Sn", "Tin", "118.71", 14, 5,
	"Sb", "Antimony", "121.76", 15, 5,
	"Te", "Tellurium", "127.6", 16, 5,
	"I", "Iodine", "126.90447", 17, 5,
	"Xe", "Xenon", "131.293", 18, 5,
	"Cs", "Caesium", "132.9054", 1, 6,
	"Ba", "Barium", "132.9054", 2, 6,
	"La", "Lanthanum", "138.90547", 4, 9,
	"Ce", "Cerium", "140.116", 5, 9,
	"Pr", "Praseodymium", "140.90765", 6, 9,
	"Nd", "Neodymium", "144.242", 7, 9,
	"Pm", "Promethium", "(145)", 8, 9,
	"Sm", "Samarium", "150.36", 9, 9,
	"Eu", "Europium", "151.964", 10, 9,
	"Gd", "Gadolinium", "157.25", 11, 9,
	"Tb", "Terbium", "158.92535", 12, 9,
	"Dy", "Dysprosium", "162.5", 13, 9,
	"Ho", "Holmium", "164.93032", 14, 9,
	"Er", "Erbium", "167.259", 15, 9,
	"Tm", "Thulium", "168.93421", 16, 9,
	"Yb", "Ytterbium", "173.054", 17, 9,
	"Lu", "Lutetium", "174.9668", 18, 9,
	"Hf", "Hafnium", "178.49", 4, 6,
	"Ta", "Tantalum", "180.94788", 5, 6,
	"W", "Tungsten", "183.84", 6, 6,
	"Re", "Rhenium", "186.207", 7, 6,
	"Os", "Osmium", "190.23", 8, 6,
	"Ir", "Iridium", "192.217", 9, 6,
	"Pt", "Platinum", "195.084", 10, 6,
	"Au", "Gold", "196.966569", 11, 6,
	"Hg", "Mercury", "200.59", 12, 6,
	"Tl", "Thallium", "204.3833", 13, 6,
	"Pb", "Lead", "207.2", 14, 6,
	"Bi", "Bismuth", "208.9804", 15, 6,
	"Po", "Polonium", "(209)", 16, 6,
	"At", "Astatine", "(210)", 17, 6,
	"Rn", "Radon", "(222)", 18, 6,
	"Fr", "Francium", "(223)", 1, 7,
	"Ra", "Radium", "(226)", 2, 7,
	"Ac", "Actinium", "(227)", 4, 10,
	"Th", "Thorium", "232.03806", 5, 10,
	"Pa", "Protactinium", "231.0588", 6, 10,
	"U", "Uranium", "238.02891", 7, 10,
	"Np", "Neptunium", "(237)", 8, 10,
	"Pu", "Plutonium", "(244)", 9, 10,
	"Am", "Americium", "(243)", 10, 10,
	"Cm", "Curium", "(247)", 11, 10,
	"Bk", "Berkelium", "(247)", 12, 10,
	"Cf", "Californium", "(251)", 13, 10,
	"Es", "Einstenium", "(252)", 14, 10,
	"Fm", "Fermium", "(257)", 15, 10,
	"Md", "Mendelevium", "(258)", 16, 10,
	"No", "Nobelium", "(259)", 17, 10,
	"Lr", "Lawrencium", "(262)", 18, 10,
	"Rf", "Rutherfordium", "(267)", 4, 7,
	"Db", "Dubnium", "(268)", 5, 7,
	"Sg", "Seaborgium", "(271)", 6, 7,
	"Bh", "Bohrium", "(272)", 7, 7,
	"Hs", "Hassium", "(270)", 8, 7,
	"Mt", "Meitnerium", "(276)", 9, 7,
	"Ds", "Darmstadium", "(281)", 10, 7,
	"Rg", "Roentgenium", "(280)", 11, 7,
	"Cn", "Copernicium", "(285)", 12, 7,
	"Uut", "Unutrium", "(284)", 13, 7,
	"Fl", "Flerovium", "(289)", 14, 7,
	"Uup", "Ununpentium", "(288)", 15, 7,
	"Lv", "Livermorium", "(293)", 16, 7,
	"Uus", "Ununseptium", "(294)", 17, 7,
	"Uuo", "Ununoctium", "(294)", 18, 7
];

var atomData = [
{
Num           : "1",
Name             : "Hydrogen",
Short_name       : "H",
Color            : "0.99,0.99,0.99",
radius_used      : "0.320000",
radius_covalent : "0.320000",
radius_ic   : "0.790000",
Charge_state     : "-1",
radius_ionic    : "1.540000",
},
{
Num           : "2",
Name             : "Helium",
Short_name       : "He",
Color            : "0.84,0.99,0.99",
radius_used      : "0.930000",
radius_covalent : "0.930000",
radius_ic   : "0.490000",
},
{
Num           : "3",
Name             : "Lithium",
Short_name       : "Li",
Color            : "0.79,0.5,0.99",
radius_used      : "1.230000",
radius_covalent : "1.230000",
radius_ic   : "2.050000",
Charge_state     : "1",
radius_ionic    : "0.680000",
},
{
Num           : "4",
Name             : "Beryllium",
Short_name       : "Be",
Color            : "0.75,0.99,0.0",
radius_used      : "0.900000",
radius_covalent : "0.900000",
radius_ic   : "1.400000",
Charge_state     : "1",
radius_ionic    : "0.440000",
Charge_state     : "2",
radius_ionic    : "0.350000",
},
{
Num           : "5",
Name             : "Boron",
Short_name       : "B",
Color            : "0.99,0.70,0.70",
radius_used      : "0.820000",
radius_covalent : "0.820000",
radius_ic   : "1.170000",
Charge_state     : "1",
radius_ionic    : "0.350000",
Charge_state     : "3",
radius_ionic    : "0.230000",
},
{
Num           : "6",
Name             : "Carbon",
Short_name       : "C",
Color            : "0.3,0.3,0.3",
radius_used      : "0.910000",
radius_covalent : "0.770000",
radius_ic   : "0.910000",
Charge_state     : "-4",
radius_ionic    : "2.600000",
Charge_state     : "4",
radius_ionic    : "0.160000",
},
{
Num           : "7",
Name             : "Nitrogen",
Short_name       : "N",
Color            : "0.18,0.31,0.96",
radius_used      : "0.750000",
radius_covalent : "0.750000",
radius_ic   : "0.750000",
Charge_state     : "-3",
radius_ionic    : "1.710000",
Charge_state     : "1",
radius_ionic    : "0.250000",
Charge_state     : "3",
radius_ionic    : "0.160000",
Charge_state     : "5",
radius_ionic    : "0.130000",
},
{
Num           : "8",
Name             : "Oxygen",
Short_name       : "O",
Color            : "0.99,0.05,0.05",
radius_used      : "0.730000",
radius_covalent : "0.730000",
radius_ic   : "0.650000",
Charge_state     : "-2",
radius_ionic    : "1.320000",
Charge_state     : "-1",
radius_ionic    : "1.760000",
Charge_state     : "1",
radius_ionic    : "0.220000",
Charge_state     : "6",
radius_ionic    : "0.090000",
},
{
Num           : "9",
Name             : "Fluorine",
Short_name       : "F",
Color            : "0.0,1.0,0.0",
radius_used      : "1.330000",
radius_covalent : "0.720000",
radius_ic   : "0.570000",
Charge_state     : "-1",
radius_ionic    : "1.330000",
Charge_state     : "7",
radius_ionic    : "0.080000",
},
{
Num           : "10",
Name             : "Neon",
Short_name       : "Ne",
Color            : "0.69,0.88,0.95",
radius_used      : "0.710000",
radius_covalent : "0.710000",
radius_ic   : "0.510000",
Charge_state     : "1",
radius_ionic    : "1.120000",
},
{
Num           : "11",
Name             : "Sodium",
Short_name       : "Na",
Color            : "0.5,0.5,0.5",
radius_used      : "0.970000",
radius_covalent : "1.540000",
radius_ic   : "2.230000",
Charge_state     : "1",
radius_ionic    : "0.970000",
},
{
Num           : "12",
Name             : "Magnesium",
Short_name       : "Mg",
Color            : "0.38,0.066,1.0",
radius_used      : "0.660000",
radius_covalent : "1.360000",
radius_ic   : "1.720000",
Charge_state     : "1",
radius_ionic    : "0.820000",
Charge_state     : "2",
radius_ionic    : "0.660000",
},
{
Num           : "13",
Name             : "Aluminium",
Short_name       : "Al",
Color            : "0.74,0.64,0.64",
radius_used      : "1.180000",
radius_covalent : "1.180000",
radius_ic   : "1.820000",
Charge_state     : "3",
radius_ionic    : "0.510000",
},
{
Num           : "14",
Name             : "Silicon",
Short_name       : "Si",
Color            : "0.93,0.78,0.62",
radius_used      : "1.110000",
radius_covalent : "1.110000",
radius_ic   : "1.460000",
Charge_state     : "-4",
radius_ionic    : "2.710000",
Charge_state     : "-1",
radius_ionic    : "3.840000",
Charge_state     : "1",
radius_ionic    : "0.650000",
Charge_state     : "4",
radius_ionic    : "0.420000",
},
{
Num           : "15",
Name             : "Phosphorus",
Short_name       : "P",
Color            : "0.99,0.5,0.0",
radius_used      : "1.060000",
radius_covalent : "1.060000",
radius_ic   : "1.230000",
Charge_state     : "-3",
radius_ionic    : "2.120000",
Charge_state     : "3",
radius_ionic    : "0.440000",
Charge_state     : "5",
radius_ionic    : "0.350000",
},
{
Num           : "16",
Name             : "Sulfur",
Short_name       : "S",
Color            : "0.99,0.99,0.18",
radius_used      : "1.020000",
radius_covalent : "1.020000",
radius_ic   : "1.090000",
Charge_state     : "-2",
radius_ionic    : "1.840000",
Charge_state     : "2",
radius_ionic    : "2.190000",
Charge_state     : "4",
radius_ionic    : "0.370000",
Charge_state     : "6",
radius_ionic    : "0.300000",
},
{
Num           : "17",
Name             : "Chlorine",
Short_name       : "Cl",
Color            : "0.095,0.411,1.0",
radius_used      : "1.810000",
radius_covalent : "0.990000",
radius_ic   : "0.970000",
Charge_state     : "-1",
radius_ionic    : "1.810000",
Charge_state     : "5",
radius_ionic    : "0.340000",
Charge_state     : "7",
radius_ionic    : "0.270000",
},
{
Num           : "18",
Name             : "Argon",
Short_name       : "Ar",
Color            : "0.5,0.81,0.88",
radius_used      : "0.980000",
radius_covalent : "0.980000",
radius_ic   : "0.880000",
Charge_state     : "1",
radius_ionic    : "1.540000",
},
{
Num           : "19",
Name             : "Potassium",
Short_name       : "K",
Color            : "0.55,0.25,0.82",
radius_used      : "2.030000",
radius_covalent : "2.030000",
radius_ic   : "2.770000",
Charge_state     : "1",
radius_ionic    : "0.810000",
},
{
Num           : "20",
Name             : "Calcium",
Short_name       : "Ca",
Color            : "0.23,0.99,0.0",
radius_used      : "1.740000",
radius_covalent : "1.740000",
radius_ic   : "2.230000",
Charge_state     : "1",
radius_ionic    : "1.180000",
Charge_state     : "2",
radius_ionic    : "0.990000",
},
{
Num           : "21",
Name             : "Scandium",
Short_name       : "Sc",
Color            : "0.89,0.89,0.89",
radius_used      : "1.440000",
radius_covalent : "1.440000",
radius_ic   : "2.090000",
Charge_state     : "3",
radius_ionic    : "0.732000",
},
{
Num           : "22",
Name             : "Titanium",
Short_name       : "Ti",
Color            : "0.74,0.75,0.77",
radius_used      : "1.320000",
radius_covalent : "1.320000",
radius_ic   : "2.000000",
Charge_state     : "1",
radius_ionic    : "0.960000",
Charge_state     : "2",
radius_ionic    : "0.940000",
Charge_state     : "3",
radius_ionic    : "0.760000",
Charge_state     : "4",
radius_ionic    : "0.680000",
},
{
Num           : "23",
Name             : "Vanadium",
Short_name       : "V",
Color            : "0.64,0.64,0.66",
radius_used      : "1.220000",
radius_covalent : "1.220000",
radius_ic   : "1.920000",
Charge_state     : "2",
radius_ionic    : "0.880000",
Charge_state     : "3",
radius_ionic    : "0.740000",
Charge_state     : "4",
radius_ionic    : "0.630000",
Charge_state     : "5",
radius_ionic    : "0.590000",
},
{
Num           : "24",
Name             : "Chromium",
Short_name       : "Cr",
Color            : "0.53,0.59,0.77",
radius_used      : "1.180000",
radius_covalent : "1.180000",
radius_ic   : "1.850000",
Charge_state     : "1",
radius_ionic    : "0.810000",
Charge_state     : "2",
radius_ionic    : "0.890000",
Charge_state     : "3",
radius_ionic    : "0.630000",
Charge_state     : "6",
radius_ionic    : "0.520000",
},
{
Num           : "25",
Name             : "Manganese",
Short_name       : "Mn",
Color            : "0.60,0.47,0.77",
radius_used      : "1.170000",
radius_covalent : "1.170000",
radius_ic   : "1.790000",
Charge_state     : "2",
radius_ionic    : "0.800000",
Charge_state     : "3",
radius_ionic    : "0.660000",
Charge_state     : "4",
radius_ionic    : "0.600000",
Charge_state     : "7",
radius_ionic    : "0.460000",
},
{
Num           : "26",
Name             : "Iron",
Short_name       : "Fe",
Color            : "0.87,0.39,0.19",
radius_used      : "1.170000",
radius_covalent : "1.170000",
radius_ic   : "1.720000",
Charge_state     : "2",
radius_ionic    : "0.740000",
Charge_state     : "3",
radius_ionic    : "0.640000",
},
{
Num           : "27",
Name             : "Cobalt",
Short_name       : "Co",
Color            : "0.93,0.56,0.62",
radius_used      : "1.160000",
radius_covalent : "1.160000",
radius_ic   : "1.670000",
Charge_state     : "2",
radius_ionic    : "0.720000",
Charge_state     : "3",
radius_ionic    : "0.630000",
},
{
Num           : "28",
Name             : "Nickel",
Short_name       : "Ni",
Color            : "0.31,0.81,0.31",
radius_used      : "1.150000",
radius_covalent : "1.150000",
radius_ic   : "1.620000",
Charge_state     : "2",
radius_ionic    : "0.690000",
},
{
Num           : "29",
Name             : "Copper",
Short_name       : "Cu",
Color            : "0.78,0.5,0.19",
radius_used      : "1.170000",
radius_covalent : "1.170000",
radius_ic   : "1.570000",
Charge_state     : "1",
radius_ionic    : "0.960000",
Charge_state     : "2",
radius_ionic    : "0.720000",
},
{
Num           : "30",
Name             : "Zinc",
Short_name       : "Zn",
Color            : "0.48,0.5,0.68",
radius_used      : "1.250000",
radius_covalent : "1.250000",
radius_ic   : "1.530000",
Charge_state     : "1",
radius_ionic    : "0.880000",
Charge_state     : "2",
radius_ionic    : "0.740000",
},
{
Num           : "31",
Name             : "Gallium",
Short_name       : "Ga",
Color            : "0.75,0.55,0.55",
radius_used      : "1.260000",
radius_covalent : "1.260000",
radius_ic   : "1.810000",
Charge_state     : "1",
radius_ionic    : "0.810000",
Charge_state     : "3",
radius_ionic    : "0.620000",
},
{
Num           : "32",
Name             : "Germanium",
Short_name       : "Ge",
Color            : "0.39,0.55,0.55",
radius_used      : "1.220000",
radius_covalent : "1.220000",
radius_ic   : "1.520000",
Charge_state     : "-4",
radius_ionic    : "2.720000",
Charge_state     : "2",
radius_ionic    : "0.730000",
Charge_state     : "4",
radius_ionic    : "0.530000",
},
{
Num           : "33",
Name             : "Arsenic",
Short_name       : "As",
Color            : "0.73,0.5,0.88",
radius_used      : "1.200000",
radius_covalent : "1.200000",
radius_ic   : "1.330000",
Charge_state     : "-3",
radius_ionic    : "2.220000",
Charge_state     : "3",
radius_ionic    : "0.580000",
Charge_state     : "5",
radius_ionic    : "0.460000",
},
{
Num           : "34",
Name             : "Selenium",
Short_name       : "Se",
Color            : "0.99,0.62,0.0",
radius_used      : "1.160000",
radius_covalent : "1.160000",
radius_ic   : "1.220000",
Charge_state     : "-2",
radius_ionic    : "1.910000",
Charge_state     : "-1",
radius_ionic    : "2.320000",
Charge_state     : "1",
radius_ionic    : "0.660000",
Charge_state     : "4",
radius_ionic    : "0.500000",
Charge_state     : "6",
radius_ionic    : "0.420000",
},
{
Num           : "35",
Name             : "Bromine",
Short_name       : "Br",
Color            : "0.64,0.16,0.16",
radius_used      : "1.140000",
radius_covalent : "1.140000",
radius_ic   : "1.120000",
Charge_state     : "-1",
radius_ionic    : "1.960000",
Charge_state     : "5",
radius_ionic    : "0.470000",
Charge_state     : "7",
radius_ionic    : "0.390000",
},
{
Num           : "36",
Name             : "Krypton",
Short_name       : "Kr",
Color            : "0.35,0.71,0.81",
radius_used      : "1.310000",
radius_covalent : "1.310000",
radius_ic   : "1.240000",
},
{
Num           : "37",
Name             : "Rubidium",
Short_name       : "Rb",
Color            : "0.43,0.17,0.68",
radius_used      : "2.160000",
radius_covalent : "2.160000",
radius_ic   : "2.980000",
Charge_state     : "1",
radius_ionic    : "1.470000",
},
{
Num           : "38",
Name             : "Strontium",
Short_name       : "Sr",
Color            : "0.0,0.99,0.0",
radius_used      : "1.910000",
radius_covalent : "1.910000",
radius_ic   : "2.450000",
Charge_state     : "2",
radius_ionic    : "1.120000",
},
{
Num           : "39",
Name             : "Yttrium",
Short_name       : "Y",
Color            : "0.57,0.99,0.99",
radius_used      : "1.620000",
radius_covalent : "1.620000",
radius_ic   : "2.270000",
Charge_state     : "3",
radius_ionic    : "0.893000",
},
{
Num           : "40",
Name             : "Zirconium",
Short_name       : "Zr",
Color            : "0.57,0.87,0.87",
radius_used      : "1.450000",
radius_covalent : "1.450000",
radius_ic   : "2.160000",
Charge_state     : "1",
radius_ionic    : "1.090000",
Charge_state     : "4",
radius_ionic    : "0.790000",
},
{
Num           : "41",
Name             : "Niobium",
Short_name       : "Nb",
Color            : "0.44,0.75,0.78",
radius_used      : "1.340000",
radius_covalent : "1.340000",
radius_ic   : "2.080000",
Charge_state     : "1",
radius_ionic    : "1.000000",
Charge_state     : "4",
radius_ionic    : "0.740000",
Charge_state     : "5",
radius_ionic    : "0.690000",
},
{
Num           : "42",
Name             : "Molybdenum",
Short_name       : "Mo",
Color            : "0.32,0.70,0.70",
radius_used      : "1.300000",
radius_covalent : "1.300000",
radius_ic   : "2.010000",
Charge_state     : "1",
radius_ionic    : "0.930000",
Charge_state     : "4",
radius_ionic    : "0.700000",
Charge_state     : "6",
radius_ionic    : "0.620000",
},
{
Num           : "43",
Name             : "Technetium",
Short_name       : "Tc",
Color            : "0.23,0.61,0.61",
radius_used      : "1.270000",
radius_covalent : "1.270000",
radius_ic   : "1.950000",
Charge_state     : "7",
radius_ionic    : "0.979000",
},
{
Num           : "44",
Name             : "Ruthenium",
Short_name       : "Ru",
Color            : "0.14,0.55,0.55",
radius_used      : "1.250000",
radius_covalent : "1.250000",
radius_ic   : "1.890000",
Charge_state     : "4",
radius_ionic    : "0.670000",
},
{
Num           : "45",
Name             : "Rhodium",
Short_name       : "Rh",
Color            : "0.03,0.48,0.54",
radius_used      : "1.250000",
radius_covalent : "1.250000",
radius_ic   : "1.830000",
Charge_state     : "3",
radius_ionic    : "0.680000",
},
{
Num           : "46",
Name             : "Palladium",
Short_name       : "Pd",
Color            : "0.0,0.41,0.51",
radius_used      : "1.280000",
radius_covalent : "1.280000",
radius_ic   : "1.790000",
Charge_state     : "2",
radius_ionic    : "0.800000",
Charge_state     : "4",
radius_ionic    : "0.650000",
},
{
Num           : "47",
Name             : "Silver",
Short_name       : "Ag",
Color            : "0.75,0.75,0.75",
radius_used      : "1.340000",
radius_covalent : "1.340000",
radius_ic   : "1.750000",
Charge_state     : "1",
radius_ionic    : "1.260000",
Charge_state     : "2",
radius_ionic    : "0.890000",
},
{
Num           : "48",
Name             : "Cadmium",
Short_name       : "Cd",
Color            : "0.99,0.84,0.55",
radius_used      : "1.480000",
radius_covalent : "1.480000",
radius_ic   : "1.710000",
Charge_state     : "1",
radius_ionic    : "1.140000",
Charge_state     : "2",
radius_ionic    : "0.970000",
},
{
Num           : "49",
Name             : "Indium",
Short_name       : "In",
Color            : "0.64,0.45,0.44",
radius_used      : "1.440000",
radius_covalent : "1.440000",
radius_ic   : "2.000000",
Charge_state     : "3",
radius_ionic    : "0.810000",
},
{
Num           : "50",
Name             : "Tin",
Short_name       : "Sn",
Color            : "0.39,0.5,0.5",
radius_used      : "1.410000",
radius_covalent : "1.410000",
radius_ic   : "1.720000",
Charge_state     : "-4",
radius_ionic    : "2.940000",
Charge_state     : "-1",
radius_ionic    : "3.700000",
Charge_state     : "2",
radius_ionic    : "0.930000",
Charge_state     : "4",
radius_ionic    : "0.710000",
},
{
Num           : "51",
Name             : "Antimony",
Short_name       : "Sb",
Color            : "0.61,0.38,0.70",
radius_used      : "1.400000",
radius_covalent : "1.400000",
radius_ic   : "1.530000",
Charge_state     : "-3",
radius_ionic    : "2.450000",
Charge_state     : "3",
radius_ionic    : "0.760000",
Charge_state     : "5",
radius_ionic    : "0.620000",
},
{
Num           : "52",
Name             : "Tellurium",
Short_name       : "Te",
Color            : "0.82,0.47,0.0",
radius_used      : "1.360000",
radius_covalent : "1.360000",
radius_ic   : "1.420000",
Charge_state     : "-2",
radius_ionic    : "2.110000",
Charge_state     : "-1",
radius_ionic    : "2.500000",
Charge_state     : "1",
radius_ionic    : "0.820000",
Charge_state     : "4",
radius_ionic    : "0.700000",
Charge_state     : "6",
radius_ionic    : "0.560000",
},
{
Num           : "53",
Name             : "Iodine",
Short_name       : "I",
Color            : "0.57,0.0,0.57",
radius_used      : "1.330000",
radius_covalent : "1.330000",
radius_ic   : "1.320000",
Charge_state     : "-1",
radius_ionic    : "2.200000",
Charge_state     : "5",
radius_ionic    : "0.620000",
Charge_state     : "7",
radius_ionic    : "0.500000",
},
{
Num           : "54",
Name             : "Xenon",
Short_name       : "Xe",
Color            : "0.25,0.61,0.68",
radius_used      : "1.310000",
radius_covalent : "1.310000",
radius_ic   : "1.240000",
},
{
Num           : "55",
Name             : "Caesium",
Short_name       : "Cs",
Color            : "0.33,0.08,0.55",
radius_used      : "2.350000",
radius_covalent : "2.350000",
radius_ic   : "3.350000",
Charge_state     : "1",
radius_ionic    : "1.670000",
},
{
Num           : "56",
Name             : "Barium",
Short_name       : "Ba",
Color            : "0.0,0.78,0.0",
radius_used      : "1.980000",
radius_covalent : "1.980000",
radius_ic   : "2.780000",
Charge_state     : "1",
radius_ionic    : "1.530000",
Charge_state     : "2",
radius_ionic    : "1.340000",
},
{
Num           : "57",
Name             : "Lanthanum",
Short_name       : "La",
Color            : "0.43,0.82,0.99",
radius_used      : "1.690000",
radius_covalent : "1.690000",
radius_ic   : "2.740000",
Charge_state     : "1",
radius_ionic    : "1.390000",
Charge_state     : "3",
radius_ionic    : "1.061000",
},
{
Num           : "58",
Name             : "Cerium",
Short_name       : "Ce",
Color            : "0.99,0.99,0.77",
radius_used      : "1.650000",
radius_covalent : "1.650000",
radius_ic   : "2.700000",
Charge_state     : "1",
radius_ionic    : "1.270000",
Charge_state     : "3",
radius_ionic    : "1.034000",
Charge_state     : "4",
radius_ionic    : "0.920000",
},
{
Num           : "59",
Name             : "Praseodymium",
Short_name       : "Pr",
Color            : "0.84,0.99,0.77",
radius_used      : "1.650000",
radius_covalent : "1.650000",
radius_ic   : "2.670000",
Charge_state     : "3",
radius_ionic    : "1.013000",
Charge_state     : "4",
radius_ionic    : "0.900000",
},
{
Num           : "60",
Name             : "Neodymium",
Short_name       : "Nd",
Color            : "0.77,0.99,0.77",
radius_used      : "1.640000",
radius_covalent : "1.640000",
radius_ic   : "2.640000",
Charge_state     : "3",
radius_ionic    : "0.995000",
},
{
Num           : "61",
Name             : "Promethium",
Short_name       : "Pm",
Color            : "0.63,0.99,0.77",
radius_used      : "1.630000",
radius_covalent : "1.630000",
radius_ic   : "2.620000",
Charge_state     : "3",
radius_ionic    : "0.979000",
},
{
Num           : "62",
Name             : "Samarium",
Short_name       : "Sm",
Color            : "0.55,0.99,0.77",
radius_used      : "1.620000",
radius_covalent : "1.620000",
radius_ic   : "2.590000",
Charge_state     : "3",
radius_ionic    : "0.964000",
},
{
Num           : "63",
Name             : "Europium",
Short_name       : "Eu",
Color            : "0.37,0.99,0.77",
radius_used      : "1.850000",
radius_covalent : "1.850000",
radius_ic   : "2.560000",
Charge_state     : "2",
radius_ionic    : "1.090000",
Charge_state     : "3",
radius_ionic    : "0.950000",
},
{
Num           : "64",
Name             : "Gadolinium",
Short_name       : "Gd",
Color            : "0.26,0.99,0.77",
radius_used      : "1.610000",
radius_covalent : "1.610000",
radius_ic   : "2.540000",
Charge_state     : "3",
radius_ionic    : "0.938000",
},
{
Num           : "65",
Name             : "Terbium",
Short_name       : "Tb",
Color            : "0.18,0.99,0.77",
radius_used      : "1.590000",
radius_covalent : "1.590000",
radius_ic   : "2.510000",
Charge_state     : "3",
radius_ionic    : "0.923000",
Charge_state     : "4",
radius_ionic    : "0.840000",
},
{
Num           : "66",
Name             : "Dysprosium",
Short_name       : "Dy",
Color            : "0.12,0.99,0.77",
radius_used      : "1.590000",
radius_covalent : "1.590000",
radius_ic   : "2.490000",
Charge_state     : "3",
radius_ionic    : "0.908000",
},
{
Num           : "67",
Name             : "Holmium",
Short_name       : "Ho",
Color            : "0.0,0.99,0.60",
radius_used      : "1.580000",
radius_covalent : "1.580000",
radius_ic   : "2.470000",
Charge_state     : "3",
radius_ionic    : "0.894000",
},
{
Num           : "68",
Name             : "Erbium",
Short_name       : "Er",
Color            : "0.0,0.89,0.45",
radius_used      : "1.570000",
radius_covalent : "1.570000",
radius_ic   : "2.450000",
Charge_state     : "3",
radius_ionic    : "0.881000",
},
{
Num           : "69",
Name             : "Thulium",
Short_name       : "Tm",
Color            : "0.0,0.82,0.32",
radius_used      : "1.560000",
radius_covalent : "1.560000",
radius_ic   : "2.420000",
Charge_state     : "3",
radius_ionic    : "0.870000",
},
{
Num           : "70",
Name             : "Ytterbium",
Short_name       : "Yb",
Color            : "0.0,0.74,0.21",
radius_used      : "1.740000",
radius_covalent : "1.740000",
radius_ic   : "2.400000",
Charge_state     : "2",
radius_ionic    : "0.930000",
Charge_state     : "3",
radius_ionic    : "0.858000",
},
{
Num           : "71",
Name             : "Lutetium",
Short_name       : "Lu",
Color            : "0.0,0.66,0.14",
radius_used      : "1.560000",
radius_covalent : "1.560000",
radius_ic   : "2.250000",
Charge_state     : "3",
radius_ionic    : "0.850000",
},
{
Num           : "72",
Name             : "Hafnium",
Short_name       : "Hf",
Color            : "0.30,0.75,0.99",
radius_used      : "1.440000",
radius_covalent : "1.440000",
radius_ic   : "2.160000",
Charge_state     : "4",
radius_ionic    : "0.780000",
},
{
Num           : "73",
Name             : "Tantalum",
Short_name       : "Ta",
Color            : "0.30,0.64,0.99",
radius_used      : "1.340000",
radius_covalent : "1.340000",
radius_ic   : "2.090000",
Charge_state     : "5",
radius_ionic    : "0.680000",
},
{
Num           : "74",
Name             : "Tungsten",
Short_name       : "W",
Color            : "0.12,0.57,0.83",
radius_used      : "1.300000",
radius_covalent : "1.300000",
radius_ic   : "2.020000",
Charge_state     : "4",
radius_ionic    : "0.700000",
Charge_state     : "6",
radius_ionic    : "0.620000",
},
{
Num           : "75",
Name             : "Rhenium",
Short_name       : "Re",
Color            : "0.14,0.48,0.66",
radius_used      : "1.280000",
radius_covalent : "1.280000",
radius_ic   : "1.970000",
Charge_state     : "4",
radius_ionic    : "0.720000",
Charge_state     : "7",
radius_ionic    : "0.560000",
},
{
Num           : "76",
Name             : "Osmium",
Short_name       : "Os",
Color            : "0.14,0.39,0.58",
radius_used      : "1.260000",
radius_covalent : "1.260000",
radius_ic   : "1.920000",
Charge_state     : "4",
radius_ionic    : "0.880000",
Charge_state     : "6",
radius_ionic    : "0.690000",
},
{
Num           : "77",
Name             : "Iridium",
Short_name       : "Ir",
Color            : "0.08,0.32,0.52",
radius_used      : "1.270000",
radius_covalent : "1.270000",
radius_ic   : "1.870000",
Charge_state     : "4",
radius_ionic    : "0.680000",
},
{
Num           : "78",
Name             : "Platinium",
Short_name       : "Pt",
Color            : "0.81,0.81,0.87",
radius_used      : "1.300000",
radius_covalent : "1.300000",
radius_ic   : "1.830000",
Charge_state     : "2",
radius_ionic    : "0.800000",
Charge_state     : "4",
radius_ionic    : "0.650000",
},
{
Num           : "79",
Name             : "Gold",
Short_name       : "Au",
Color            : "0.99,0.81,0.13",
radius_used      : "1.340000",
radius_covalent : "1.340000",
radius_ic   : "1.790000",
Charge_state     : "1",
radius_ionic    : "1.370000",
Charge_state     : "3",
radius_ionic    : "0.850000",
},
{
Num           : "80",
Name             : "Mercury",
Short_name       : "Hg",
Color            : "0.71,0.71,0.81",
radius_used      : "1.490000",
radius_covalent : "1.490000",
radius_ic   : "1.760000",
Charge_state     : "1",
radius_ionic    : "1.270000",
Charge_state     : "2",
radius_ionic    : "1.100000",
},
{
Num           : "81",
Name             : "Thallium",
Short_name       : "Tl",
Color            : "0.64,0.32,0.30",
radius_used      : "1.480000",
radius_covalent : "1.480000",
radius_ic   : "2.080000",
Charge_state     : "1",
radius_ionic    : "1.470000",
Charge_state     : "3",
radius_ionic    : "0.950000",
},
{
Num           : "82",
Name             : "Lead",
Short_name       : "Pb",
Color            : "0.33,0.34,0.37",
radius_used      : "1.470000",
radius_covalent : "1.470000",
radius_ic   : "1.810000",
Charge_state     : "2",
radius_ionic    : "1.200000",
Charge_state     : "4",
radius_ionic    : "0.840000",
},
{
Num           : "83",
Name             : "Bismuth",
Short_name       : "Bi",
Color            : "0.61,0.30,0.70",
radius_used      : "1.460000",
radius_covalent : "1.460000",
radius_ic   : "1.630000",
Charge_state     : "1",
radius_ionic    : "0.980000",
Charge_state     : "3",
radius_ionic    : "0.960000",
Charge_state     : "5",
radius_ionic    : "0.740000",
},
{
Num           : "84",
Name             : "Polonium",
Short_name       : "Po",
Color            : "0.66,0.35,0.0",
radius_used      : "1.460000",
radius_covalent : "1.460000",
radius_ic   : "1.530000",
Charge_state     : "6",
radius_ionic    : "0.670000",
},
{
Num           : "85",
Name             : "Astatine",
Short_name       : "At",
Color            : "0.45,0.30,0.26",
radius_used      : "1.450000",
radius_covalent : "1.450000",
radius_ic   : "1.430000",
Charge_state     : "-3",
radius_ionic    : "2.220000",
Charge_state     : "3",
radius_ionic    : "0.850000",
Charge_state     : "5",
radius_ionic    : "0.460000",
},
{
Num           : "86",
Name             : "Radon",
Short_name       : "Rn",
Color            : "0.25,0.50,0.58",
radius_used      : "1.000000",
radius_covalent : "1.000000",
radius_ic   : "1.340000",
},
{
Num           : "87",
Name             : "Francium",
Short_name       : "Fr",
Color            : "0.25,0.0,0.39",
radius_used      : "1.000000",
radius_covalent : "1.000000",
radius_ic   : "1.000000",
Charge_state     : "1",
radius_ionic    : "1.800000",
},
{
Num           : "88",
Name             : "Radium",
Short_name       : "Ra",
Color            : "0.0,0.48,0.0",
radius_used      : "1.000000",
radius_covalent : "1.000000",
radius_ic   : "1.000000",
Charge_state     : "2",
radius_ionic    : "1.430000",
},
{
Num           : "89",
Name             : "Actinium",
Short_name       : "Ac",
Color            : "0.43,0.66,0.97",
radius_used      : "1.000000",
radius_covalent : "1.000000",
radius_ic   : "1.000000",
Charge_state     : "3",
radius_ionic    : "1.180000",
},
{
Num           : "90",
Name             : "Thorium",
Short_name       : "Th",
Color            : "0.0,0.72,0.99",
radius_used      : "1.650000",
radius_covalent : "1.650000",
radius_ic   : "1.000000",
Charge_state     : "4",
radius_ionic    : "1.020000",
},
{
Num           : "91",
Name             : "Protactinium",
Short_name       : "Pa",
Color            : "0.0,0.62,0.99",
radius_used      : "1.000000",
radius_covalent : "1.000000",
radius_ic   : "1.000000",
Charge_state     : "3",
radius_ionic    : "1.130000",
Charge_state     : "4",
radius_ionic    : "0.980000",
Charge_state     : "5",
radius_ionic    : "0.890000",
},
{
Num           : "92",
Name             : "Uranium",
Short_name       : "U",
Color            : "0.0,0.55,0.99",
radius_used      : "1.420000",
radius_covalent : "1.420000",
radius_ic   : "1.000000",
Charge_state     : "4",
radius_ionic    : "0.970000",
Charge_state     : "6",
radius_ionic    : "0.800000",
},
{
Num           : "93",
Name             : "Neptunium",
Short_name       : "Np",
Color            : "0.0,0.5,0.99",
radius_used      : "1.000000",
radius_covalent : "1.000000",
radius_ic   : "1.000000",
Charge_state     : "3",
radius_ionic    : "1.100000",
Charge_state     : "4",
radius_ionic    : "0.950000",
Charge_state     : "7",
radius_ionic    : "0.710000",
},
{
Num           : "94",
Name             : "Plutonium",
Short_name       : "Pu",
Color            : "0.0,0.41,0.99",
radius_used      : "1.000000",
radius_covalent : "1.000000",
radius_ic   : "1.000000",
Charge_state     : "3",
radius_ionic    : "1.080000",
Charge_state     : "4",
radius_ionic    : "0.930000",
},
{
Num           : "95",
Name             : "Americium",
Short_name       : "Am",
Color            : "0.32,0.35,0.94",
radius_used      : "1.000000",
radius_covalent : "1.000000",
radius_ic   : "1.000000",
Charge_state     : "3",
radius_ionic    : "1.070000",
Charge_state     : "4",
radius_ionic    : "0.920000",
},
{
Num           : "96",
Name             : "Curium",
Short_name       : "Cm",
Color            : "0.46,0.35,0.88",
radius_used      : "1.000000",
radius_covalent : "1.000000",
radius_ic   : "1.000000",
},
{
Num           : "97",
Name             : "Berkelium",
Short_name       : "Bk",
Color            : "0.53,0.30,0.88",
radius_used      : "1.000000",
radius_covalent : "1.000000",
radius_ic   : "1.000000",
},
{
Num           : "98",
Name             : "Californium",
Short_name       : "Cf",
Color            : "0.62,0.21,0.82",
radius_used      : "1.000000",
radius_covalent : "1.000000",
radius_ic   : "1.000000",
},
{
Num           : "99",
Name             : "Einsteinium",
Short_name       : "Es",
Color            : "0.69,0.12,0.82",
radius_used      : "1.000000",
radius_covalent : "1.000000",
radius_ic   : "1.000000",
},
{
Num           : "100",
Name             : "Fermium",
Short_name       : "Fm",
Color            : "0.69,0.12,0.72",
radius_used      : "1.000000",
radius_covalent : "1.000000",
radius_ic   : "1.000000",
},
{
Num           : "101",
Name             : "Mendelevium",
Short_name       : "Md",
Color            : "0.69,0.05,0.64",
radius_used      : "1.000000",
radius_covalent : "1.000000",
radius_ic   : "1.000000",
},
{
Num           : "102",
Name             : "Nobelium",
Short_name       : "No",
Color            : "0.73,0.05,0.52",
radius_used      : "1.000000",
radius_covalent : "1.000000",
radius_ic   : "1.000000",
},
{
Num           : "103",
Name             : "Lawrencium",
Short_name       : "Lr",
Color            : "0.77,0.0,0.39",
radius_used      : "1.000000",
radius_covalent : "1.000000",
radius_ic   : "1.000000",
},
{
Num           : "104",
Name             : "Rutherfordium",
Short_name       : "Rf",
Color            : "0.5,0.5,0.5",
radius_used      : "1.2",
radius_covalent : "1.0",
radius_ic   : "1.0",
},
{
Num           : "105",
Name             : "Dubnium",
Short_name       : "Db",
Color            : "0.5,0.5,0.5",
radius_used      : "1.0",
radius_covalent : "1.0",
radius_ic   : "1.0",
},
{
Num           : "106",
Name             : "Seaborgium",
Short_name       : "Sg",
Color            : "0.5,0.5,0.5",
radius_used      : "1.0",
radius_covalent : "1.0",
radius_ic   : "1.0",
},
{
Num           : "107",
Name             : "Bohrium",
Short_name       : "Bh",
Color            : "0.5,0.5,0.5",
radius_used      : "1.0",
radius_covalent : "1.0",
radius_ic   : "1.0",
},
{
Num           : "108",
Name             : "Hassium",
Short_name       : "Hs",
Color            : "0.5,0.5,0.5",
radius_used      : "1.0",
radius_covalent : "1.0",
radius_ic   : "1.0",
},
{
Num           : "109",
Name             : "Meitnerium",
Short_name       : "Mt",
Color            : "0.5,0.5,0.5",
radius_used      : "1.0",
radius_covalent : "1.0",
radius_ic   : "1.0",
},
{
Num           : "110",
Name             : "Darmstadium",
Short_name       : "Ds",
Color            : "0.5,0.5,0.5",
radius_used      : "1.0",
radius_covalent : "1.0",
radius_ic   : "1.0",
},
{
Num           : "111",
Name             : "Roentgenium",
Short_name       : "Rg",
Color            : "0.5,0.5,0.5",
radius_used      : "1.0",
radius_covalent : "1.0",
radius_ic   : "1.0",
},
{
Num           : "112",
Name             : "Copernicium",
Short_name       : "Cn",
Color            : "0.5,0.5,0.5",
radius_used      : "1.0",
radius_covalent : "1.0",
radius_ic   : "1.0",
},
{
Num           : "113",
Name             : "Unutrium",
Short_name       : "Uut",
Color            : "0.5,0.5,0.5",
radius_used      : "1.0",
radius_covalent : "1.0",
radius_ic   : "1.0",
},
{
Num           : "114",
Name             : "Flerovium",
Short_name       : "Fl",
Color            : "0.5,0.5,0.5",
radius_used      : "1.0",
radius_covalent : "1.0",
radius_ic   : "1.0",
},
{
Num           : "115",
Name             : "Ununpentium",
Short_name       : "Uup",
Color            : "0.5,0.5,0.5",
radius_used      : "1.0",
radius_covalent : "1.0",
radius_ic   : "1.0",
},
{
Num           : "116",
Name             : "Livermorium",
Short_name       : "Lv",
Color            : "0.5,0.5,0.5",
radius_used      : "1.0",
radius_covalent : "1.0",
radius_ic   : "1.0",
},
{
Num           : "117",
Name             : "Ununseptium",
Short_name       : "Uus",
Color            : "0.5,0.5,0.5",
radius_used      : "1.0",
radius_covalent : "1.0",
radius_ic   : "1.0",
},
{
Num           : "118",
Name             : "Ununoctium",
Short_name       : "Uuo",
Color            : "0.5,0.5,0.5",
radius_used      : "1.0",
radius_covalent : "1.0",
radius_ic   : "1.0",
},
];


var camera, scene, renderer;
var controls;

var objects = [];
var targets = { table: [], sphere: [], helix: [], grid: [] };

init();
animate();

function init() {

	camera = new THREE.PerspectiveCamera( 40, window.innerWidth / window.innerHeight, 1, 10000 );
	camera.position.z = 3000;

	scene = new THREE.Scene();

	// table

	for ( var i = 0; i < table.length; i += 5 ) {

		var element = document.createElement( 'div' );
		element.className = 'element';
		element.style.backgroundColor = 'rgba(0,127,127,' + ( Math.random() * 0.5 + 0.25 ) + ')';

		var number = document.createElement( 'div' );
		number.className = 'number';
		number.textContent = (i/5) + 1;
		element.appendChild( number );

		var symbol = document.createElement( 'div' );
		symbol.className = 'symbol';
		symbol.textContent = table[ i ];
		element.appendChild( symbol );

		var details = document.createElement( 'div' );
		details.className = 'details';
		details.innerHTML = table[ i + 1 ] + '<br>' + table[ i + 2 ];
		element.appendChild( details );

		var object = new THREE.CSS3DObject( element );
		object.position.x = Math.random() * 4000 - 2000;
		object.position.y = Math.random() * 4000 - 2000;
		object.position.z = Math.random() * 4000 - 2000;
		scene.add( object );

		objects.push( object );

		//

		var object = new THREE.Object3D();
		object.position.x = ( table[ i + 3 ] * 140 ) - 1330;
		object.position.y = - ( table[ i + 4 ] * 180 ) + 990;

		targets.table.push( object );

	}

	// sphere

	var vector = new THREE.Vector3();

	for ( var i = 0, l = objects.length; i < l; i ++ ) {

		var phi = Math.acos( -1 + ( 2 * i ) / l );
		var theta = Math.sqrt( l * Math.PI ) * phi;

		var object = new THREE.Object3D();

		object.position.x = 800 * Math.cos( theta ) * Math.sin( phi );
		object.position.y = 800 * Math.sin( theta ) * Math.sin( phi );
		object.position.z = 800 * Math.cos( phi );

		vector.copy( object.position ).multiplyScalar( 2 );

		object.lookAt( vector );

		targets.sphere.push( object );

	}

	// helix

	var vector = new THREE.Vector3();

	for ( var i = 0, l = objects.length; i < l; i ++ ) {

		var phi = i * 0.175 + Math.PI;

		var object = new THREE.Object3D();

		object.position.x = 900 * Math.sin( phi );
		object.position.y = - ( i * 8 ) + 450;
		object.position.z = 900 * Math.cos( phi );

		vector.x = object.position.x * 2;
		vector.y = object.position.y;
		vector.z = object.position.z * 2;

		object.lookAt( vector );

		targets.helix.push( object );

	}

	// grid

	for ( var i = 0; i < objects.length; i ++ ) {

		var object = new THREE.Object3D();

		object.position.x = ( ( i % 5 ) * 400 ) - 800;
		object.position.y = ( - ( Math.floor( i / 5 ) % 5 ) * 400 ) + 800;
		object.position.z = ( Math.floor( i / 25 ) ) * 1000 - 2000;

		targets.grid.push( object );

	}

	//

	renderer = new THREE.CSS3DRenderer();
	renderer.setSize( window.innerWidth, window.innerHeight );
	renderer.domElement.style.position = 'absolute';
	oUl = document.getElementById( 'container' ).appendChild( renderer.domElement );

	//
    (function () {
        var oAlert = document.getElementById("alert"),
            oATitle = oAlert.getElementsByClassName("title")[0].getElementsByTagName("span")[0],
            oAImg = oAlert.getElementsByClassName("img")[0].getElementsByTagName("img")[0],
            oAInfo = oAlert.getElementsByClassName("info")[0].getElementsByTagName("span")[0],
            oAAuthor = oAlert.getElementsByClassName("author")[0].getElementsByTagName("span")[0];
        var oBWrap = document.getElementById("bg-wrap");
        var oBack = document.getElementById("back");
        var oiFrame = document.getElementById("iFrame");
        //给每一个li加个点击事件，不太合理，这里用事件委托
        console.log(oUl)
        oUl.onclick = function (e) {
            e = e || window.event;
            var target = e.target || e.srcElement;
            if(/div/i.test(getNode(target))){
                if(getNode(target).ICBC){
                    getNode(target).ICBC = false;
                }else {
                    if(oAlert.style.display === "block"){
                        hide();
                    }else {
                        var index1 = getNode(target)
                        console.log(index1)
                        index = index1.previousSibling.textContent-1;
                        console.log(index)
                        var date = atomData[index] ;
                        console.log(index1.nextSibling.textContent)
                        oAlert.index = index;
                        oATitle.innerHTML = date.Name;
                        oAImg.src = "/static/img/src/"+date.Name+"/" + date.Name.toLowerCase() + ".jgp";
                 
                        oAInfo.innerHTML = "Num:" + date.Num +"<br>"+"Short_name:" + date.Short_name +"<br>"+"Color:" + date.Color +"<br>"+"radius_used:" + date.radius_used +"<br>"+"radius_covalent:" + date.radius_covalent +"<br>"+"radius_ic:" + date.radius_ic ;
                        oAAuthor.innerHTML = date.Short_name
                        show();
                    }
                }
            }
        };
        oAlert.onclick = function (e) {
            var date = atomData[this.index] ;
            console.log
            oiFrame.src = "/static/img/src/"+date.Name+"/index.html";
            oBWrap.className = "left";(date)
            e.cancelBubble = true; // 阻止冒泡
        };
        document.onclick = function () {
            hide();//li以外点击 alert 弹窗隐藏
        };
        oBack.onclick = function () {
            oBWrap.className = "";
        };
         // Js 动画  显示
        function show() {
            if(!oAlert.timer){
                oAlert.timer = true;
                //初始样式
                oAlert.style.display = "block";
                oAlert.style.transform = "rotateY(0deg) scale(2)";
                oAlert.style.opacity = "0";
                var time = 800,//显示时间
                    sTime = new Date();//初始时间
                function play() {
                    var prop = (new Date - sTime)/time; // prop 表比例
                    if(prop >= 1){
                        prop = 1;
                        oAlert.timer = false;
                    }else {
                        requestAnimationFrame(play);
                    }
                    oAlert.style.transform = "rotateY(0deg) scale("+((1-2)*prop+2)+")";
                    oAlert.style.opacity = prop;
                }
                requestAnimationFrame(play);
            }
            return false;
        }
        //Js 动画 隐藏
        function hide() {
            if(oAlert.style.display === "block" && !oAlert.timer){
                oAlert.timer = true;
                oAlert.style.display = "block";
                oAlert.style.transform = "rotateY(0deg) scale(1)";
                oAlert.style.opactiy = "1";
                var time = 800,
                    sTime = new Date();
                function play() {
                    var prop = (new Date - sTime)/time;
                    if(prop>=1){
                        prop = 1;
                        oAlert.timer = false;
                        oAlert.style.display = "none";
                    }else{
                        requestAnimationFrame(play);
                    }
                    oAlert.style.transform = "rotateY("+180*prop+"deg) scale("+(1 - prop)+")";
                    oAlert.style.opacity = 1 - prop;
                }
                requestAnimationFrame(play);
            }
        }
        
    })();

    function getNode(node) {
        if(node.nodeName === "BODY" || node.nodeName === "DIV" ){
            return node;
        }else {
            return getNode(node.parentNode);
        }
        
    }       

	//


	controls = new THREE.TrackballControls( camera, renderer.domElement );
	controls.rotateSpeed = 0.5;
	controls.minDistance = 500;
	controls.maxDistance = 6000;
	controls.addEventListener( 'change', render );

	var button = document.getElementById( 'table' );
	button.addEventListener( 'click', function ( event ) {

		transform( targets.table, 2000 );

	}, false );

	var button = document.getElementById( 'sphere' );
	button.addEventListener( 'click', function ( event ) {

		transform( targets.sphere, 2000 );

	}, false );

	var button = document.getElementById( 'helix' );
	button.addEventListener( 'click', function ( event ) {

		transform( targets.helix, 2000 );

	}, false );

	var button = document.getElementById( 'grid' );
	button.addEventListener( 'click', function ( event ) {

		transform( targets.grid, 2000 );

	}, false );

	transform( targets.table, 5000 );

	//

	window.addEventListener( 'resize', onWindowResize, false );

}

function transform( targets, duration ) {

	TWEEN.removeAll();

	for ( var i = 0; i < objects.length; i ++ ) {

		var object = objects[ i ];
		var target = targets[ i ];

		new TWEEN.Tween( object.position )
			.to( { x: target.position.x, y: target.position.y, z: target.position.z }, Math.random() * duration + duration )
			.easing( TWEEN.Easing.Exponential.InOut )
			.start();

		new TWEEN.Tween( object.rotation )
			.to( { x: target.rotation.x, y: target.rotation.y, z: target.rotation.z }, Math.random() * duration + duration )
			.easing( TWEEN.Easing.Exponential.InOut )
			.start();

	}

	new TWEEN.Tween( this )
		.to( {}, duration * 2 )
		.onUpdate( render )
		.start();

}

function onWindowResize() {

	camera.aspect = window.innerWidth / window.innerHeight;
	camera.updateProjectionMatrix();

	renderer.setSize( window.innerWidth, window.innerHeight );

	render();

}

function animate() {

	requestAnimationFrame( animate );

	TWEEN.update();

	controls.update();

}

function render() {

	renderer.render( scene, camera );

}