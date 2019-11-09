
# coding: utf-8

# In[43]:


import math
from sklearn.cross_validation import train_test_split
from sklearn.metrics import accuracy_score, average_precision_score, recall_score
from sklearn.metrics.pairwise import cosine_similarity
import seaborn as sns
import matplotlib.pyplot as plt


# In[53]:


import pandas as pd
import ast


# In[54]:


df = pd.read_csv('Crop Cycles.csv')


# In[55]:


def get_state(state, df=df):
    for idx, row in df.iterrows():
        if row['State'].lower() == state:
            try:
                return ast.literal_eval(row['Crops'])
            except Exception as e:
                return row['Crops']
    return 0


# In[56]:


from itertools import permutations, combinations


# In[57]:


crop_array = get_state(state='karnataka')
print crop_array


# In[58]:


comb = combinations(crop_array, 3)


# In[59]:


import random


# In[60]:


def markets(crops):
    
    probas = [float(random.uniform(0,1)) for x in range(len(crops))]
    values = [int(random.randint(1,5))*1000 for x in range(len(crops))]
    
    print ("Crop values : ",values)
    
    fin_val = [int(probas[x]*values[x]) for x in range(len(crops))]
    for item in range(len(crops)):
        print crops[item],":",fin_val[item]
    
    print(type(fin_val))
    return fin_val     
        


# In[61]:


market_value = markets(crop_array)


# In[62]:


def maximal(cycle, crops, market_value):
    
    curr_max = 0
    maximal = []
    for i in range(len(market_value)):
        try:
            curr_max = market_value[i]+market_value[i+1]+market_value[i+2]
            maximal.append([curr_max, [crops[i], crops[i+1], crops[i+2]]])
        except Exception as e:
            pass
        
    return max(sorted(maximal))

            


# In[63]:


maximal(cycle=3, crops=crop_array, market_value=market_value)

