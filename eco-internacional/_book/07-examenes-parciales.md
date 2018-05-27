#Exámenes de parciales

En esta sección se elaboran distintos exámenes parciales de la clase.

## Examen Octubre 2015

## Pregunta 1

Consideremos una economía pequeña y abierta con capital en la que $\beta(1+r_{s-1}) = \beta(1+r^*)$ para cada $s \geq t$. Supongamos que el capital en el periodo $t$ satisface que $Af'(k_t) = r^*$ y además los agentes esperan que la productividad aumenté a $\lambda A$, con $\lambda > 1$ para $t+1 \leq s \leq t+h$, regresando a $A$ a partir $t + h -1$, ¿el valor de $b_{t+h+1}$ es mayor entre ,ás grande sea h?

### Solución 

Como hay dos niveles de productividad, conforme a la condición de optimalidad del capital, habrá dos niveles de capital óptimo. Definimos $k_0$ tal que $Af'(k_0) = r^*$ y $k_1$ tal que $\lambda Af'(k_1) = r^*$. Luego, definiendo $f_0 = f(k_0)$ y $f_1 = f(k_1)$, tenemos que

|$s$|$A_s$  | $k_s$| $y_s$ | $i_s$|
|---|-------|------|-------|-------------------------|
|$t$|$A$  |$k_0$ |$Af_0$ | $k_{t+1}-k_t = 0$ |
|$t+1$|$\lambda A$  |$k_0$ |$\lambda Af_0$ | $k_{t+2}-k_{t+1} = k_1 - k_0$ |
|$t+2$|$\lambda A$  |$k_1$ |$\lambda Af_1$ | $k_{t+3}-k_{t+2} = 0$ |
|$t+h$|$\lambda A$ | $k_1$ |$\lambda Af_1$ | $k_{t+h+1} - k_{t+h} = k_0 - k_1$ |
|$t + h + 1$ | $A$ | $k_0$ | $Af_0$ | $k_{t+h+2}-k_{t+h+1} = 0$ |

Además dado que se cumple la ecuación de euler, el consumo $c$ es el mismo para todos los periodos. Con esto, por un lado,

$$
c = r^*b_t + \hat{y_t} - \hat{i_t}
$$

Y por otro lado,

$$
c = r^* b_{t+h+1} + \widehat{y_{t+h+1}} - \widehat{i_{t+h+1}}
$$
Por lo tanto,

$$
b_{t+h+1} = b_t + \frac{1}{r^*}(\hat{y_t} - \widehat{y_{t+h+1}} - (\hat{i_t} - \widehat{i_{t+h+1}}))
$$
Claramente $\widehat{y_{t+h+1}} = Af_0$ pues a partir de $t+h+1$ la situación vuelve a la normalidad. Lo mismo sucede con $\widehat{i_{t+h+1}} = 0$. Por otro lado,

$$
\begin{align}
\hat{y_t} &= (1-\beta)\sum_{s\geq t}\beta^{s-t}y_s \\
& = (1-\beta)\left(Af_0 + \beta \lambda A f_0 + \sum_{s = t+2}^{t+h}\beta^{s-t}\lambda Af_1 + \sum_{s\geq t+h+1}\beta^{s-t} Af_0\right) \\
&= (1-\beta)\left((1+\beta \lambda)Af_0 + \frac{\beta^2(1-\beta^{h-1})\lambda Af_1}{1-\beta} + \frac{\beta^{h+1}Af_0}{1-\beta}\right) \\
&= ((1-\beta)(1+\beta \lambda) + \beta^{h+1})Af_0 + \beta^2(1-\beta^{h-1})\lambda Af_1
\end{align}
$$

Para la inversión,

$$
\begin{align}
\hat{i_t} &= (1-\beta)\sum_{s\geq t} \beta^{s-t} i_s \\
&=(1-\beta)(\beta(k_1-k_0) + \beta^h (k_0-k_1)) = (1-\beta)\beta(1-\beta^h)(k_1 - k_0)
\end{align}
$$ 
Obsérvese que dados los rendimientos decrecientes a escala de $f$ se verfifica que $k_1 - k_0 > 0$ por lo que $\hat{i_t}<0$. Así,

$$
b_{t+h+1} = b_t + \frac{1}{r^*}(((1-\beta)(1+\beta \lambda) + \beta^{h+1})Af_0 + \beta^2(1-\beta^{h-1})\lambda Af_1 - Af_0- (1-\beta)\beta(1-\beta^h)(k_1 - k_0) )
$$

## Problema 2

Se tiene una economía en la trayectoria de crecimiento balanceado $\frac{A_{S+1}}{A_s} = 1 + \hat{A}$ para cada $s \geq t$, con $b_t = 0$ y se da una destrucción parcial e inesperada de su acervo de capital en el periodo $t$. ¿Eveltualmente la cuenta corriente como la balanza comercial serán negativas?
