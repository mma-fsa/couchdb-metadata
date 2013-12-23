SELECT *
FROM `CarMetaDev`.`CarModel` CM
 INNER JOIN `CarMetaDev`.`CarTrim` CT
 	ON CM.CarModelID = CT.CarModelID
 INNER JOIN `CarMetaDev`.`CarTrimEngine` CT_CE
  ON CT.CarTrimID = CT_CE.CarTrimID
 INNER JOIN `CarMetaDev`.`CarEngine` CE
  ON CT_CE.CarEngineID = CE.CarEngineID
