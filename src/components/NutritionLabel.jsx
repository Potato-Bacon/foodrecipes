/* eslint-disable react/prop-types */
import React from "react";
// Nutrition label template taken from  https://codepen.io/chriscoyier/pen/ApavyZ
function NutritionLabel({ recipeDetail }) {
  const nutrientsPerServing = (totalNutrients, servings) =>
    totalNutrients / servings;
  const servings = recipeDetail?.recipe?.yield;

  return (
    <>
      <section className="performance-facts">
        <header className="performance-facts__header">
          <h1 className="performance-facts__title">Nutrition Facts</h1>
          {/* <p>Serving Size 1/2 cup (about 82g) </p> */}
          {/* <p>Serves {servings} </p> */}
        </header>
        <table className="performance-facts__table">
          <thead>
            <tr>
              <th colSpan="3" className="small-info">
                <b>Amount Per Serving</b>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th colSpan="2">
                <b>Calories </b>
                {Math.round(
                  nutrientsPerServing(recipeDetail?.recipe?.calories, servings)
                )}{" "}
                kcal
              </th>
              <td></td>
            </tr>
            <tr className="thick-row">
              <td colSpan="3" className="small-info">
                <b>% Daily Value*</b>
              </td>
            </tr>
            <tr>
              <th colSpan="2">
                <b>Total Fat </b>
                {Math.round(
                  nutrientsPerServing(
                    recipeDetail?.recipe?.totalNutrients?.FAT?.quantity,
                    servings
                  )
                )}
                g
              </th>
              <td>
                <b>
                  {Math.round(
                    nutrientsPerServing(
                      recipeDetail?.recipe?.totalDaily?.FAT?.quantity,
                      servings
                    )
                  )}
                  %
                </b>
              </td>
            </tr>
            <tr>
              <td className="blank-cell"></td>
              <th>
                Saturated Fat{" "}
                {Math.round(
                  nutrientsPerServing(
                    recipeDetail?.recipe?.totalNutrients?.FASAT?.quantity,
                    servings
                  )
                )}
                g
              </th>
              <td>
                <b>
                  {Math.round(
                    nutrientsPerServing(
                      recipeDetail?.recipe?.totalDaily?.FASAT?.quantity,
                      servings
                    )
                  )}
                  %
                </b>
              </td>
            </tr>
            <tr>
              <td className="blank-cell"></td>
              <th>
                Trans Fat{" "}
                {Math.round(
                  nutrientsPerServing(
                    recipeDetail?.recipe?.totalNutrients?.FATRN?.quantity,
                    servings
                  )
                )}
                g
              </th>
              <td></td>
            </tr>
            <tr>
              <th colSpan="2">
                <b>Cholesterol </b>
                {Math.round(
                  nutrientsPerServing(
                    recipeDetail?.recipe?.totalNutrients?.CHOLE?.quantity,
                    servings
                  )
                )}
                mg
              </th>
              <td>
                <b>
                  {Math.round(
                    nutrientsPerServing(
                      recipeDetail?.recipe?.totalDaily?.CHOLE?.quantity,
                      servings
                    )
                  )}
                  %
                </b>
              </td>
            </tr>
            <tr>
              <th colSpan="2">
                <b>Sodium </b>
                {Math.round(
                  nutrientsPerServing(
                    recipeDetail?.recipe?.totalNutrients?.NA?.quantity,
                    servings
                  )
                )}
                mg
              </th>
              <td>
                <b>
                  {Math.round(
                    nutrientsPerServing(
                      recipeDetail?.recipe?.totalDaily?.NA?.quantity,
                      servings
                    )
                  )}
                  %
                </b>
              </td>
            </tr>
            <tr>
              <th colSpan="2">
                <b>Total Carbohydrate </b>
                {Math.round(
                  nutrientsPerServing(
                    recipeDetail?.recipe?.totalNutrients?.CHOCDF?.quantity,
                    servings
                  )
                )}
                g
              </th>
              <td>
                <b>
                  {Math.round(
                    nutrientsPerServing(
                      recipeDetail?.recipe?.totalDaily?.CHOCDF?.quantity,
                      servings
                    )
                  )}
                  %
                </b>
              </td>
            </tr>
            <tr>
              <td className="blank-cell"></td>
              <th>
                Dietary Fiber{" "}
                {Math.round(
                  nutrientsPerServing(
                    recipeDetail?.recipe?.totalNutrients?.FIBTG?.quantity,
                    servings
                  )
                )}
                g
              </th>
              <td>
                <b>
                  {Math.round(
                    nutrientsPerServing(
                      recipeDetail?.recipe?.totalDaily?.FIBTG?.quantity,
                      servings
                    )
                  )}
                  %
                </b>
              </td>
            </tr>
            <tr>
              <td className="blank-cell"></td>
              <th>
                Sugars{" "}
                {Math.round(
                  nutrientsPerServing(
                    recipeDetail?.recipe?.totalNutrients?.SUGAR?.quantity,
                    servings
                  )
                )}
                g
              </th>
              <td></td>
            </tr>
            <tr className="thick-end">
              <th colSpan="2">
                <b>Protein </b>
                {Math.round(
                  nutrientsPerServing(
                    recipeDetail?.recipe?.totalNutrients?.PROCNT?.quantity,
                    servings
                  )
                )}
                g
              </th>
              <td></td>
            </tr>
          </tbody>
        </table>

        <table className="performance-facts__table--grid">
          <tbody>
            <tr>
              <td colSpan="2">
                Vitamin A{" "}
                {Math.round(
                  nutrientsPerServing(
                    recipeDetail?.recipe?.totalDaily?.VITA_RAE?.quantity,
                    servings
                  )
                )}
                %
              </td>
              <td>
                Vitamin C{" "}
                {Math.round(
                  nutrientsPerServing(
                    recipeDetail?.recipe?.totalDaily?.VITC?.quantity,
                    servings
                  )
                )}
                %
              </td>
            </tr>
            <tr className="thin-end">
              <td colSpan="2">
                Calcium{" "}
                {Math.round(
                  nutrientsPerServing(
                    recipeDetail?.recipe?.totalDaily?.CA?.quantity,
                    servings
                  )
                )}
                %
              </td>
              <td>
                Iron{" "}
                {Math.round(
                  nutrientsPerServing(
                    recipeDetail?.recipe?.totalDaily?.FE?.quantity,
                    servings
                  )
                )}
                %
              </td>
            </tr>
          </tbody>
        </table>

        <p className="small-info">
          * Percent Daily Values are based on a 2,000 calorie diet. Your daily
          values may be higher or lower depending on your calorie needs:
        </p>

        <table className="performance-facts__table--small small-info">
          <thead>
            <tr>
              <td colSpan="2"></td>
              <th>Calories:</th>
              <th>2,000</th>
              <th>2,500</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th colSpan="2">Total Fat</th>
              <td>Less than</td>
              <td>65g</td>
              <td>80g</td>
            </tr>
            <tr>
              <td className="blank-cell"></td>
              <th>Saturated Fat</th>
              <td>Less than</td>
              <td>20g</td>
              <td>25g</td>
            </tr>
            <tr>
              <th colSpan="2">Cholesterol</th>
              <td>Less than</td>
              <td>300mg</td>
              <td>300 mg</td>
            </tr>
            <tr>
              <th colSpan="2">Sodium</th>
              <td>Less than</td>
              <td>2,400mg</td>
              <td>2,400mg</td>
            </tr>
            <tr>
              <th colSpan="3">Total Carbohydrate</th>
              <td>300g</td>
              <td>375g</td>
            </tr>
            <tr>
              <td className="blank-cell"></td>
              <th colSpan="2">Dietary Fiber</th>
              <td>25g</td>
              <td>30g</td>
            </tr>
          </tbody>
        </table>
      </section>
    </>
  );
}

export default NutritionLabel;
