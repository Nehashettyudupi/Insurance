-- Insurance
INSERT INTO `insurance`.`insurance`
(`customerId`,
`fuelId`,
`vehicleId`,
`policyId`,
`dateOfPurchase`,
`premium`,
`bodilyInjuryLiability`,
`personalInjuryProtection`,
`propertyDamageLiability`,
`collision`,
`comprehensive`,
`createdAt`,
`updatedAt`)
VALUES
(400,
1,
1,
12345,
'2018-01-16 11:10:49',
958,
0,
1,
0,
1,
1,
SYSDATE(),
SYSDATE());
SELECT * FROM insurance.insurance;

INSERT INTO `insurance`.`insurance`
(`customerId`,
`fuelId`,
`vehicleId`,
`policyId`,
`dateOfPurchase`,
`premium`,
`bodilyInjuryLiability`,
`personalInjuryProtection`,
`propertyDamageLiability`,
`collision`,
`comprehensive`,
`createdAt`,
`updatedAt`)
VALUES
(401,
1,
1,
12346,
'2018-04-04 11:10:49',
2123,
0,
1,
0,
1,
1,
SYSDATE(),
SYSDATE());
SELECT * FROM insurance.insurance;

INSERT INTO `insurance`.`insurance`
(`customerId`,
`fuelId`,
`vehicleId`,
`policyId`,
`dateOfPurchase`,
`premium`,
`bodilyInjuryLiability`,
`personalInjuryProtection`,
`propertyDamageLiability`,
`collision`,
`comprehensive`,
`createdAt`,
`updatedAt`)
VALUES
(402,
1,
1,
12356,
'2018-01-19 11:10:49',
2175,
0,
1,
0,
1,
1,
SYSDATE(),
SYSDATE());
SELECT * FROM insurance.insurance;
-- Vehicle
INSERT INTO `insurance`.`vehiclesegments`
(`vehicleId`,
`name`,
`createdAt`,
`updatedAt`)
VALUES
(1,
'A',
SYSDATE(),
SYSDATE());
INSERT INTO `insurance`.`vehiclesegments`
(`vehicleId`,
`name`,
`createdAt`,
`updatedAt`)
VALUES
(2,
'B',
SYSDATE(),
SYSDATE());
INSERT INTO `insurance`.`vehiclesegments`
(`vehicleId`,
`name`,
`createdAt`,
`updatedAt`)
VALUES
(3,
'C',
SYSDATE(),
SYSDATE());

-- customers
INSERT INTO `insurance`.`customers`
(`customerId`,
`customerGender`,
`customerIncomeGroup`,
`customerRegion`,
`customerMaritalStatus`,
`createdAt`,
`updatedAt`)
VALUES
(400,
'male',
'0- $25K',
'North',
false,
SYSDATE(),
SYSDATE());
SELECT * FROM insurance.customers;

INSERT INTO `insurance`.`customers`
(`customerId`,
`customerGender`,
`customerIncomeGroup`,
`customerRegion`,
`customerMaritalStatus`,
`createdAt`,
`updatedAt`)
VALUES
(401,
'male',
'$25-$70K',
'South',
false,
SYSDATE(),
SYSDATE());
SELECT * FROM insurance.customers;

INSERT INTO `insurance`.`customers`
(`customerId`,
`customerGender`,
`customerIncomeGroup`,
`customerRegion`,
`customerMaritalStatus`,
`createdAt`,
`updatedAt`)
VALUES
(402,
'male',
'$25-$70K',
'South',
false,
SYSDATE(),
SYSDATE());
SELECT * FROM insurance.customers;

INSERT INTO `insurance`.`customers`
(`customerId`,
`customerGender`,
`customerIncomeGroup`,
`customerRegion`,
`customerMaritalStatus`,
`createdAt`,
`updatedAt`)
VALUES
(403,
'male',
'$25-$70K',
'South',
false,
SYSDATE(),
SYSDATE());
SELECT * FROM insurance.customers;

INSERT INTO `insurance`.`customers`
(`customerId`,
`customerGender`,
`customerIncomeGroup`,
`customerRegion`,
`customerMaritalStatus`)
VALUES
(1,
'female',
'0- $25K',
'North',
false);
SELECT * FROM insurance.customers;


-- Fuel Table
INSERT INTO `insurance`.`fuel`
(`fuelId`,
`name`,
`createdAt`,
`updatedAt`)
VALUES
(1,
'CNG',
SYSDATE(),
SYSDATE());
SELECT * FROM insurance.fuel;
INSERT INTO `insurance`.`fuel`
(`fuelId`,
`name`,
`createdAt`,
`updatedAt`)
VALUES
(2,
'Petrol',
SYSDATE(),
SYSDATE());
SELECT * FROM insurance.fuel;
INSERT INTO `insurance`.`fuel`
(`fuelId`,
`name`,
`createdAt`,
`updatedAt`)
VALUES
(3,
'Diesel',
SYSDATE(),
SYSDATE());
SELECT * FROM insurance.fuel;