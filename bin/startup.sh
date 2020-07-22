#!/bin/bash
cd client && npm i

# Concurrently was used while development took place
cd ../server && npm i && npm run dev
