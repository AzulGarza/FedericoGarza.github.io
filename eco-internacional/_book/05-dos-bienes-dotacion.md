# Modelo con dos bienes, dotación

En este caso, la economía posee dos bienes: los comerciales, que denotamos por $T$ y los no comerciables que denotamos por $n$. De esta forma, para cada periodo $s \geq t$ el consumo de bienes comerciales en el periodo $s$ se denota con $c_{Ts}$ y el consumo de bienes no comerciables en el mismo periodo se denota por $c_{ns}$. Además, se define un índice de consumo $c_s$ para cada periodo $s \geq t$ dado por $c_s = c_{Ts}^\gamma c_{ns}^{1-\gamma}$ y $p_s$ como el precio relativo del bien comerciable en términos del no comerciable.

## Problema de optimización

El problema de oprimización del agente representativo es 

$$
\begin{align}
\max_{c_{Ts}, c_{ns}, b_{s+1}, s\geq t}  \sum_{s\geq t} \ln(c_s) \\
 c_s &= c_{Ts}^\gamma c_{ns}^{1-\gamma} \\
c_{Ts} + p_sc_{ns} + b_{t+1} &= y_{Ts} + p_sy_{ns} + (1 + r_{s-1})b_s
\end{align}
$$

En este problema, están dados $\{y_{Ts}, y_{ns}, r_{s-1}\}_{s\geq t}$ y $b_t$. En este caso, $c_{ns} = y_{ns}$ para cada $s \geq t$ ya que estos bienes no se comercian. Por lo tanto, la balanza comercial está dada por,

$$
T_s = y_{T_s} - c_{Ts}
$$
Para cada $s\geq t$. Y la cuenta corriente está dada por,

$$
CA_s = b_{s+1} - b_s = y_{T_s} - c_{Ts} + r_{s-1}b_s = T_s + r_{s-1}b_s
$$
Para cada $s \geq t$. Además, este problema puede dividirse en dos, como lo veremos a continuación.

### Problema de optimización intratemporal

Supongamos que $c_s$ y $p_s$ están fijos para alguna $s \geq t$ arbitraria y fija. Luego, el agente representativo busca encontrar la combinación de bienes que minimice su gasto $c_{Ts} + p_s c_{ns}$. Es decir, el agente busca,

$$
\min_{c_{Ts}, c_{ns}}\{c_{Ts} + p_sc_{ns}: c_s = c_{Ts}^\gamma c_{ns}^{1-\gamma}\}
$$

A partir de la solución, se obtiene la función de gasto óptimo que toma como argumentos $p_s$ y $c_s$, esto es 

$$
e_s = e(p_s,c_s) = \min_{c_{Ts}, c_{ns}}\{c_{Ts} + p_sc_{ns}: c_s = c_{Ts}^\gamma c_{ns}^{1-\gamma}\}
$$ 

En particular, definimos $P_s = e(p_s, 1)$ para cada $s \geq t$, el gasto óptimo cuando el índice de consumo es unitario. Dado que el índice es CD, se cumple que $P_s c_s = e(p_s, c_s)$.

### Problema de optimización intertemporal

Con el problema anterior, ahora el objetivo intertemporal del agente representativo es

$$
\begin{align}
\max_{c_s, s \geq t} \sum_{s \geq t} \ln(c_s) \\
& P_s c_s + b_{t+1} = y_{Ts} + p_s y_{ns} + (1 + r_{s-1})b_s
\end{align}
$$



## Condiciones de primer orden

### Intratemporal

A partir del problema intertemporal se obtiene que, en equilibrio, para cada $s \geq t$,

$$
p_s = \frac{(1-\gamma) c_{Ts}}{\gamma c_{ns}}
$$

Además, con esto se verifica que 

$$
P_s = \frac{1}{\gamma}\left(\frac{\gamma}{1-\gamma}p_s\right)^{1-\gamma }
$$

Con lo anterior, se cumple que $c_{Ts} = \gamma P_s c_s$ y $c_{ns} = (1-\gamma)P_sc_s$.

### Intertemporal

La condición de optimalidad intertemporal obtenida del problema respectivo es, para cada $s \geq t$,

$$
\begin{equation}
P_{s+1}c_{s+1} = \beta(1 + r_s)P_sc_s
(\#eq:optdosb)
\end{equation}
$$

Utilizando el valor de $P_s$ de la sección anterior, obtenemos que,

$$
c_{s+1} = \beta(1+r_s)\left(\frac{p_s}{p_{s+1}}\right)^{1 - \gamma}c_s
$$

### Relación entre las condiciones de optimalidad

ES conveniente identificar la relación exitente entre las condiciones de optimalidad previas. Recordemos que de la condición de eficiencia intratemporal $c_{Ts} = \gamma P_sc_s$. Por lo tanto, sustituyendo en \@ref(eq:optdosb) se tiene que para cada $s \geq t$,

$$
c_{T(s+1)} = \beta(1 +r_{s})c_{Ts}
$$

Recuperamos la ecuación de euler para los bienes comerciables.

## Restricción presupuestal

Dado que $n$ no se comercian, se debe cumplir la siguiente condición de vaciado para cada $s \geq t$, 

$$
c_{ns} = y_{ns}
$$

Por lo tanto, en equilibrio se obtiene que, para cada $s \geq t$, 

$$
\sum_{j \geq s} \Delta_j T_j = -(1+r_{s-1})b_s
$$
O bien,

$$
\sum_{j \geq s}\Delta_j c_{Tj}= (1 + r_{s-1})b_s + \sum_{j\geq s}\Delta_j y_{Tj}
$$

## Solución

Dado que la ecuación de euler se sigue cumpliendo para los bienes comerciables, entonces para cada $s \geq t$, en equilibrio,

$$
c_{Ts} = (1-\beta)(1+r_{s-1})b_s + \widehat{y_{Ts}}
$$
Donde el lado derecho son parámetros conocidos. Además, por la condición de vaciado, para cada $s \geq t$,

$$
c_{ns} = y_{ns}
$$

Donde el lado derecho son parámetros conocidos. Por último, el precio en cada periodo $s \geq t$ queda determinado por,

$$
p_s  = \frac{\gamma c_{Ts}}{(1 - \gamma)c_{ns}}
$$

## Supuestos habituales

Si $r_{s-1} = r^*$ para cada $s \geq t$ y $\beta(1 + r^*) = 1$ entonces, por la condición de euler, el consumo de bienes comerciables es el mismo en todos los periodos y 

$$
c_T = c_{Ts} = r^*b_s + \widehat{y_{Ts}} 
$$

En este caso, la cuenta corriente está dada por,

$$
CA_s = y_{Ts} - \widehat{y_{Ts}}
$$

## Ejemplo

Supongamos que $r_{s-1} = r^*$ para cada $s \geq t$ y $\beta(1 + r^*) = 1$, $y_{Ts} = y_T$, $y_{ns} = y_n$ para cada $s \geq t$ y además que $b_t = 0$. En este caso, el consumo es el mismo para ambos bienes en todos los periodos y dado que la dotación es constante se verfica que $c_{Ts} = c_T = y_T$, $c_{ns} = c_n = y_n$. Con esto, 

$$
p_s = p = \frac{\gamma c_T}{(1- \gamma)c_n} = \frac{\gamma y_T}{(1- \gamma)y_n}
$$
Finalmente, $T_s = CA_s = 0$, para cada $s \geq t$.

### Choque permanente en bienes comerciables

Supongamos ahora que $y_{Ts} = \lambda y_T$ para cada $s \geq t$. Denotamos como $c_T^p$ el consumo en este choque. Claramente $c_T^p = \lambda y_T$.

### Choque de un periodo en bienes comerciables

A partir de la situación anterior supongamos que hay un choque negativo en la dotación de bienes comerciables. Formalmente, $y_{Ts} = \lambda y_{T}$ si $s = t$ y $y_{Ts} = y_T$ si $s \geq t$. El consumo de bienes no comerciables sigue siendo el mismo. Además se sigue sosteniendo que el consumo de bienes comerciables es el mismo en cada periodo por lo que. Con esta idea en mente, notemos que,

$$
\begin{align}
\widehat{y_{Tt}} &= (1-\beta)\sum_{s\geq t}\beta^{s-t}y_{Ts} \\
&= (1-\beta)\left(\lambda y_T + \sum_{s\geq t+1}\beta^{s-t}y_{T}\right) \\
&= (1-\beta)\left(\lambda y_T + \frac{\beta y_{T}}{1-\beta}\right) \\
&= (1-\beta)\lambda y_T + \beta y_T
\end{align}
$$

Por lo tanto, si denotamos el consumo en este choque como $c_T^1$, se verfica que,

$$
c_{Ts}^1 = c_T^1 = \widehat{y_{Tt}} = (1-\beta)\lambda y_T + \beta y_T < y_T
$$
